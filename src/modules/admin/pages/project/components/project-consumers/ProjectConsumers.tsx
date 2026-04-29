import { useState } from "react";
import CheckboxGroup from "@ui/checkbox-group/CheckboxGroup.tsx";
import Checkbox from "@ui/checkbox/Checkbox.tsx";
import NotFound from "@ui/not-found/NotFound.tsx";
import { useActiveConsumersQuery } from "../../api/queries/useActiveConsumersQuery.ts";
import { useUpdateProjectConsumersMutation } from "../../api/mutations/useUpdateProjectConsumersMutation.ts";
import { useToast } from "@core/toast/hooks/useToast.ts";
import type { ProjectConsumersProps } from "./types/project-consumers.types.ts";

const ProjectConsumers = ({ project }: ProjectConsumersProps) => {
  const { data: activeConsumers, isLoading } = useActiveConsumersQuery();
  const updateMutation = useUpdateProjectConsumersMutation();
  const { showToast } = useToast();

  const [prevConsumers, setPrevConsumers] = useState(project.consumers);
  const [selectedConsumers, setSelectedConsumers] = useState<string[]>(
    project.consumers ? project.consumers.map((c) => c.id.toString()) : [],
  );

  if (project.consumers !== prevConsumers) {
    setPrevConsumers(project.consumers);
    setSelectedConsumers(
      project.consumers ? project.consumers.map((c) => c.id.toString()) : [],
    );
  }

  const handleValueChange = (newValues: string[]) => {
    setSelectedConsumers(newValues);

    updateMutation.mutate(
      {
        projectId: project.id,
        consumerIds: newValues.map((v) => parseInt(v, 10)),
      },
      {
        onSuccess: () => {
          showToast({
            text: "Project consumers updated successfully",
            type: "success",
          });
        },
        onError: (error: Error) => {
          showToast({
            text: `Failed to update consumers: ${error.message || "Unknown error"}`,
            type: "error",
          });
          // Revert to previous state on error
          if (project.consumers) {
            setSelectedConsumers(project.consumers.map((c) => c.id.toString()));
          }
        },
      },
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-700">Consumers</h2>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center text-gray-500 py-4">
          Loading consumers...
        </div>
      ) : activeConsumers && activeConsumers.length > 0 ? (
        <CheckboxGroup
          value={selectedConsumers}
          onValueChange={handleValueChange}
          className="mt-2"
        >
          {activeConsumers.map((consumer) => (
            <Checkbox
              key={consumer.id}
              value={consumer.id.toString()}
              label={consumer.title}
            />
          ))}
        </CheckboxGroup>
      ) : (
        <NotFound message="No active consumers found." />
      )}
    </div>
  );
};

export default ProjectConsumers;
