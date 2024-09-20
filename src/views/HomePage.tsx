import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import PageContainer from '../components/layout/PageContainer';
import MainCard from '../components/common/home/MainCard';

function HomePage() {
  return (
    <MainLayout>
        <PageContainer>
            <MainCard />
        </PageContainer>
    </MainLayout>
  )
}

export default HomePage;