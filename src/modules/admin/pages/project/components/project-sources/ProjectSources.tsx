import { useState } from "react";
import Button from "../../../../../../ui/button/Button.tsx";
import Modal from "../../../../../../ui/modal/Modal.tsx";
import { useToast } from "@core/toast/hooks/useToast.ts";
import SourceForm from "../../forms/source-form/SourceForm.tsx";
import type { SourceFormData } from "../../forms/source-form/types/source-form.types.ts";
import type { ProjectSource, ProjectSourcesProps } from "../../types/project.types.ts";
import { useCreateSourceMutation } from "../../api/mutations/useCreateSourceMutation.ts";
import { useUpdateSourceMutation } from "../../api/mutations/useUpdateSourceMutation.ts";
import { useDeleteSourceMutation } from "../../api/mutations/useDeleteSourceMutation.ts";
import { ProjectSourceItem } from "@admin/pages/project/components/project-source-item/ProjectSourceItem.tsx";

const ProjectSources = ({ projectId, sources }: ProjectSourcesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSource, setEditingSource] = useState<ProjectSource | null>(null);
  const { showToast } = useToast();
  
  const createMutation = useCreateSourceMutation();
  const updateMutation = useUpdateSourceMutation();
  const deleteMutation = useDeleteSourceMutation();

  const getInitialValues = (editingSource: ProjectSource | null) => {
    return editingSource
      ? {
          ...editingSource,
          status: editingSource.status as "active" | "new" | "stopped",
        }
      : { status: "active" as const };
  };

  const handleAddSource = () => {
    setEditingSource(null);
    setIsModalOpen(true);
  };

  const handleEditSource = (source: ProjectSource) => {
    setEditingSource(source);
    setIsModalOpen(true);
  };

  const handleDeleteSource = (source: ProjectSource) => {
    if (window.confirm(`Are you sure you want to delete the source "${source.title}"?`)) {
      deleteMutation.mutate(
        { id: source.id, projectId },
        {
          onSuccess: () => {
            showToast({ text: `Source "${source.title}" deleted`, type: "success" });
          },
          onError: (error: any) => {
            showToast({ text: `Failed to delete source: ${error.message || "Unknown error"}`, type: "error" });
          },
        }
      );
    }
  };

  const handleSubmit = (data: SourceFormData) => {
    if (editingSource) {
      updateMutation.mutate(
        {
          id: editingSource.id,
          projectId,
          title: data.title,
          url: data.url,
          key: data.key,
          status: data.status,
        },
        {
          onSuccess: () => {
            showToast({ text: `Source "${data.title}" updated`, type: "success" });
            setIsModalOpen(false);
          },
          onError: (error: any) => {
            showToast({ text: `Failed to update source: ${error.message || "Unknown error"}`, type: "error" });
          },
        }
      );
    } else {
      createMutation.mutate(
        {
          projectId,
          title: data.title,
          url: data.url,
          key: data.key,
        },
        {
          onSuccess: () => {
            showToast({ text: `Source "${data.title}" added`, type: "success" });
            setIsModalOpen(false);
          },
          onError: (error: any) => {
            showToast({ text: `Failed to add source: ${error.message || "Unknown error"}`, type: "error" });
          },
        }
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-700">Sources</h2>
        <Button onClick={handleAddSource}>Add Source</Button>
      </div>

      <div className="h-[400px] w-full overflow-y-auto border border-gray-200 rounded-md">
        {sources && sources.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {sources.map((source) => (
              <ProjectSourceItem
                key={source.id}
                source={source}
                onEdit={handleEditSource}
                onDelete={handleDeleteSource}
              />
            ))}
          </ul>
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No sources found for this project.
          </div>
        )}
      </div>

      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={editingSource ? "Edit Source" : "Add Source"}
        showFooter
        submitFormId="source-form"
        submitText={editingSource ? "Save Changes" : "Add"}
      >
        <SourceForm
          id="source-form"
          initialValues={getInitialValues(editingSource)}
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
};

export default ProjectSources;
