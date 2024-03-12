import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Header from '@/Layouts/Header';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />
            
            <Header />

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
            </AuthenticatedLayout>
        
        </>
    );
}
