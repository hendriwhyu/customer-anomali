import MainLayout from '@/components/layout/MainLayout'
import React from 'react'
import PageContainer from '../components/layout/PageContainer';

function HomePage() {
  return (
    <MainLayout>
        <PageContainer>
            <h1>Home Page</h1>
        </PageContainer>
    </MainLayout>
  )
}

export default HomePage;