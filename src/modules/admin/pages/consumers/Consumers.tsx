import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import ListCard from "@ui/list-card/ListCard.tsx";
import { useConsumersQuery } from "./api/queries/useConsumersQuery.ts";
import { useCreateConsumerMutation } from "./api/mutations/useCreateConsumerMutation.ts";
import { useUpdateConsumerMutation } from "./api/mutations/useUpdateConsumerMutation.ts";
import { useDeleteConsumerMutation } from "./api/mutations/useDeleteConsumerMutation.ts";
import { handleEditClick } from "./constants/consumers.constants.ts";
import Button from "@ui/button/Button.tsx";
import SimplePagination from "@ui/components/simple-pagination/SimplePagination.tsx";
import NotFound from "@ui/not-found/NotFound.tsx";
import ConsumerModal from "./components/consumer-modal/ConsumerModal.tsx";
import type { CreateConsumerFormData } from "./forms/create-consumer-form/types/create-consumer-form.types.ts";
import { useToast } from "@core/toast/hooks/useToast.ts";
import { ApiError } from "@core/api/api-error.ts";
import type { Consumer } from "./types/consumers.types.ts";

const Consumers = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useConsumersQuery();
  const { mutate: createConsumer } = useCreateConsumerMutation();
  const { mutate: updateConsumer } = useUpdateConsumerMutation();
  const { mutate: deleteConsumer } = useDeleteConsumerMutation();
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingConsumer, setEditingConsumer] = useState<Consumer | null>(null);

  const handleCreateConsumer = (formData: CreateConsumerFormData) => {
    createConsumer(formData, {
      onSuccess: (response) => {
        showToast({ text: response.message || "Consumer created successfully", type: "success" });
        setIsModalOpen(false);
        queryClient.invalidateQueries({ queryKey: ["consumers"] });
      },
      onError: (error) => {
        if (error instanceof ApiError && error.status === 409) {
          showToast({ text: error.message, type: "error" });
        } else {
          showToast({ text: error.message || "An error occurred", type: "error" });
        }
        setIsModalOpen(false);
      },
    });
  };

  const handleUpdateConsumer = (formData: CreateConsumerFormData) => {
    if (!editingConsumer) return;
    
    updateConsumer(
      { id: editingConsumer.id, data: formData },
      {
        onSuccess: (response) => {
          showToast({ text: response.message || "Consumer updated successfully", type: "success" });
          setIsModalOpen(false);
          setEditingConsumer(null);
          queryClient.invalidateQueries({ queryKey: ["consumers"] });
        },
        onError: (error) => {
          if (error instanceof ApiError && error.status === 409) {
            showToast({ text: error.message, type: "error" });
          } else {
            showToast({ text: error.message || "An error occurred", type: "error" });
          }
          setIsModalOpen(false);
          setEditingConsumer(null);
        },
      }
    );
  };

  const handleFormSubmit = (formData: CreateConsumerFormData) => {
    if (editingConsumer) {
      handleUpdateConsumer(formData);
    } else {
      handleCreateConsumer(formData);
    }
  };

  const handleDeleteConsumer = (e: React.MouseEvent, consumer: Consumer) => {
    e.stopPropagation();
    
    deleteConsumer(consumer.id, {
      onSuccess: (response) => {
        showToast({ text: response.message || "Consumer deleted successfully", type: "success" });
        queryClient.invalidateQueries({ queryKey: ["consumers"] });
      },
      onError: (error) => {
        showToast({ text: error.message || "An error occurred", type: "error" });
      },
    });
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Consumers</h2>
          <Button onClick={() => {
            setEditingConsumer(null);
            setIsModalOpen(true);
          }}>Create Consumer</Button>
        </div>

        {!isLoading && !isError && data && data.length === 0 && (
          <NotFound message="No consumers found." />
        )}

        {!isLoading && !isError && data && data.length > 0 && (
          <SimplePagination
            items={data}
            defaultLimit={8}
            renderItem={(consumer) => (
              <ListCard
                key={consumer.id}
                title={consumer.title}
                description={consumer.key}
                status={consumer.status}
                created={consumer.created}
                updated={consumer.updated}
                onEdit={(e) => handleEditClick(e, consumer, setEditingConsumer, setIsModalOpen)}
                onDelete={(e) => handleDeleteConsumer(e, consumer)}
              />
            )}
          />
        )}
      </div>

      <ConsumerModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        editingConsumer={editingConsumer}
        setEditingConsumer={setEditingConsumer}
        onSubmit={handleFormSubmit}
      />
    </AdminLayout>
  );
};

export default Consumers;
