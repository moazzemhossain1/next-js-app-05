import React from 'react';
interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const DetilesPage = async({params}:DetailsPageProps) => {
    const {id}=await params;
    return (
        <div>
            
        </div>
    );
};

export default DetilesPage;