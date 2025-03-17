import { Button, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import '../css/DeleteAccount.css';
import useDeleteAccount from "../../../hooks/useDeleteAccount";

const DeleteAccountButton = () => {
    const { deleteAccount, loading } = useDeleteAccount();
    const { confirm } = Modal;

    const showConfirm = () => {
        confirm({
            title: 'Вы уверены, что хотите удалить аккаунт?',
            icon: <ExclamationCircleFilled />,
            content: 'Это действие невозможно отменить! Все данные будут удалены навсегда.',
            okText: 'Удалить',
            okType: 'danger',
            cancelText: 'Отмена',
            centered: true,
            onOk: deleteAccount,
        });
    };

    return (
        <Button
            danger
            onClick={showConfirm}
            loading={loading}
            className="delete-account-button"
        >
            Delete Account
        </Button>
    );
};

export default DeleteAccountButton;