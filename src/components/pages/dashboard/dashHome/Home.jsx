import React, { useEffect } from 'react'
import { fetchStatistics } from '../../../../features/dashboard/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../../../ui/LoadingPage'
import StatisticsLinear from './StatisticsLinear'
import StatisticsGroup from './StatisticsGroup'

const Home = () => {
  const dispatch = useDispatch()
  const { statistics, loading } = useSelector(state => state.dashboard)

  useEffect(() => {
    if (!statistics) {
      dispatch(fetchStatistics())
    }
  }, [])

  return (
    <LoadingPage isLoading={loading}>
      <StatisticsGroup title={"Shop & Blog Statistics"} texts={["blog posts", "products", "directors", "countries"]}
      numbers={[statistics?.blog_count, statistics?.products_count, statistics?.directors_count, statistics?.countries_count]} />

      <StatisticsGroup title={'Engagement Statistics'} texts={["items in cart", "items in wishlist"]}
      numbers={[statistics?.cart_count, statistics?.wishlist_count]} />
      
      <StatisticsGroup title={"orders statistics"} texts={["total orders", "orders today", "orders last week", "orders last month"]}
      numbers={[statistics?.orders_count, statistics?.orders_today_count, statistics?.orders_last_week_count, statistics?.orders_last_month_count]} />

      <div className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 my-20'>
        <div>
          <p className='font-display uppercase mb-5 text-sm mt-2 opacity-60'>Today</p>
          <StatisticsLinear data={statistics?.orders_last_day?.map(item => ({...item, date: new Date(item.date).toLocaleDateString()}))} />
        </div>
        <div>
          <p className='font-display uppercase mb-5 text-sm mt-2 opacity-60'>Last Week</p>
          <StatisticsLinear data={statistics?.orders_last_week?.map(item => ({...item, date: new Date(item.date).toLocaleDateString()}))} />
        </div>
        <div>
          <p className='font-display uppercase mb-5 text-sm mt-2 opacity-60'>Last Month</p>
          <StatisticsLinear data={statistics?.orders_last_month?.map(item => ({...item, date: new Date(item.date).toLocaleDateString()}))} />
        </div>
      </div>

      <StatisticsGroup isUsd={true} title={"Invoice Statistics"} texts={["today", "last week", "last month", "total" ]}
      numbers={[statistics?.orders_today_total_price, statistics?.orders_last_week_total_price, statistics?.orders_last_month_total_price, statistics?.orders_total_price]} />
    </LoadingPage>
  )
}

export default Home
