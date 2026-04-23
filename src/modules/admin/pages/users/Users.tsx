import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import ListCard from "@ui/list-card/ListCard.tsx";
import { useUsersQuery } from "./api/queries/useUsersQuery.ts";
import { useCreateUserMutation } from "./api/mutations/useCreateUserMutation.ts";
import { useUpdateUserMutation } from "./api/mutations/useUpdateUserMutation.ts";
import { useDeleteUserMutation } from "./api/mutations/useDeleteUserMutation.ts";
import { handleEditClick } from "./constants/users.constants.ts";
import Button from "@ui/button/Button.tsx";
import SimplePagination from "@ui/components/simple-pagination/SimplePagination.tsx";
import NotFound from "@ui/not-found/NotFound.tsx";
import UserModal from "./components/user-modal/UserModal.tsx";
import type { CreateUserFormData, UpdateUserFormData } from "./forms/create-user-form/types/create-user-form.types.ts";
import { useToast } from "@core/toast/hooks/useToast.ts";
import { ApiError } from "@core/api/api-error.ts";
import type { User } from "../dashboard/types/dashboard.types.ts";

const Users = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useUsersQuery();
  const { mutate: createUser } = useCreateUserMutation();
  const { mutate: updateUser } = useUpdateUserMutation();
  const { mutate: deleteUser } = useDeleteUserMutation();
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleCreateUser = (formData: CreateUserFormData) => {
    const { projects, ...rest } = formData;
    const { repeatPassword: _repeatPassword, ...restWithoutRepeat } = rest as CreateUserFormData;
    
    const dataToSend = {
      ...restWithoutRepeat,
      projectIds: projects?.map(Number) || [],
    };
    createUser(dataToSend, {
      onSuccess: (response) => {
        showToast({ text: response.message || "User created successfully", type: "success" });
        setIsModalOpen(false);
        queryClient.invalidateQueries({ queryKey: ["users"] });
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

  const handleUpdateUser = (formData: CreateUserFormData) => {
    if (!editingUser) return;
    
    const { projects, ...rest } = formData;
    const { repeatPassword: _repeatPassword, ...restWithoutRepeat } = rest as CreateUserFormData;
    
    const dataToSend = {
      ...restWithoutRepeat,
      projectIds: projects?.map(Number) || [],
    };
    updateUser(
      { id: editingUser.id, data: dataToSend },
      {
        onSuccess: (response) => {
          showToast({ text: response.message || "User updated successfully", type: "success" });
          setIsModalOpen(false);
          setEditingUser(null);
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (error) => {
          if (error instanceof ApiError && error.status === 409) {
            showToast({ text: error.message, type: "error" });
          } else {
            showToast({ text: error.message || "An error occurred", type: "error" });
          }
          setIsModalOpen(false);
          setEditingUser(null);
        },
      }
    );
  };

  const handleFormSubmit = (formData: CreateUserFormData | UpdateUserFormData) => {
    if (editingUser) {
      handleUpdateUser(formData as CreateUserFormData);
    } else {
      handleCreateUser(formData as CreateUserFormData);
    }
  };

  const handleDeleteUser = (e: React.MouseEvent, user: User) => {
    e.stopPropagation();
    
    deleteUser(user.id, {
      onSuccess: (response) => {
        showToast({ text: response.message || "User deleted successfully", type: "success" });
        queryClient.invalidateQueries({ queryKey: ["users"] });
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
          <h2 className="text-3xl font-bold text-gray-800">Users</h2>
          <Button onClick={() => {
            setEditingUser(null);
            setIsModalOpen(true);
          }}>Create User</Button>
        </div>

        {!isLoading && !isError && data && data.length === 0 && (
          <NotFound message="No users found." />
        )}

        {!isLoading && !isError && data && data.length > 0 && (
          <SimplePagination
            items={data}
            defaultLimit={8}
            renderItem={(user) => (
              <ListCard
                key={user.id}
                title={user.name}
                description={user.projects?.map(p => p.title).join(", ")}
                status={user.status}
                role={user.role}
                created={user.created}
                updated={user.updated}
                onEdit={(e) => handleEditClick(e, user, setEditingUser, setIsModalOpen)}
                onDelete={(e) => handleDeleteUser(e, user)}
              />
            )}
          />
        )}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        onSubmit={handleFormSubmit}
      />
    </AdminLayout>
  );
};

export default Users;
