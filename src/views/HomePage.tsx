import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import PageContainer from '../components/layout/PageContainer';
import MainCard from '../components/common/home/MainCard';
import ProductList from '../components/common/home/ProductList';

function HomePage() {
  return (
    <MainLayout>
        <PageContainer>
            <MainCard />
            <ProductList />
        </PageContainer>
    </MainLayout>
  )
}

export default HomePage;