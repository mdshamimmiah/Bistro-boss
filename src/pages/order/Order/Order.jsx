// import { useState,  } from 'react';
import order from '../../../assets/shop/banner2.jpg';
// import Cover from '../../Shared/Cover/Cover';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import useMenu from '../../../hooks/useMenu';
// import OrderTab from '../OrderTab/OrderTab';
// import { useParams } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// const Order = () => {
//   const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
//   const { category } = useParams();
//   // console.log(category);
//   const initialIndex = categories.indexOf(category);
//   const [tabIndex, setTabIndex] = useState(initialIndex);
//   const [menu] = useMenu();
//   const desert = menu?.filter((item) => item.category === 'dessert');
//   const soup = menu?.filter(item => item.category === 'soup');
//   const salad = menu?.filter(item => item.category === 'salad');
//   const pizza = menu?.filter(item => item.category === 'pizza');
//   const drinks = menu?.filter(item => item.category === 'drinks');

//   // Effect to update the active tab index when the URL changes
//   // useEffect(() => {
//   //   setTabIndex(initialIndex);
//   // }, [initialIndex]);

//   return (
//     <div className=''>
//       <Helmet>
//         <title>Bistro Boss | Order Food</title>
//         </Helmet>
     
//       <Cover img={order} title="Order Food"></Cover>
//       <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//         <TabList>
//           <Tab>Salad</Tab>
//           <Tab>Pizza</Tab>
//           <Tab>Soup</Tab>
//           <Tab>Dessert</Tab>
//           <Tab>Drinks</Tab>
//         </TabList>
//         <TabPanel className="">
//           <OrderTab item={salad}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//           <OrderTab item={pizza}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//           <OrderTab item={soup}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//           <OrderTab item={desert}></OrderTab>
//         </TabPanel>
//         <TabPanel>
//           <OrderTab item={drinks}></OrderTab>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default Order;

import  { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();

  // Define items per page
  const itemsPerPage = 3;

  // Initialize pagination state for each category
  const [pagination, setPagination] = useState(() => {
    const paginationState = {};
    categories.forEach(cat => {
      paginationState[cat] = { page: 0 };
    });
    return paginationState;
  });

  // Function to get current page items for a specific category
  const getCurrentPageItems = (category) => {
    console.log(getCurrentPageItems);
    const categoryItems = menu?.filter(item => item.category === category);
    const startIndex = pagination[category].page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return categoryItems?.slice(startIndex, endIndex);
  };

  // Function to handle next page for a specific category
  const nextPage = (category) => {
    setPagination(prevPagination => ({
      ...prevPagination,
      [category]: {
        ...prevPagination[category],
        page: Math.min(prevPagination[category].page + 1, Math.floor(menu?.filter(item => item.category === category).length / itemsPerPage))
      }
    }));
  };

  // Function to handle previous page for a specific category
  const prevPage = (category) => {
    setPagination(prevPagination => ({
      ...prevPagination,
      [category]: {
        ...prevPagination[category],
        page: Math.max(prevPagination[category].page - 1, 0)
      }
    }));
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover img={order} title="Order Food"></Cover>
      <Tabs defaultIndex={initialIndex}>
        <TabList>
          {categories.map((cat, index) => (
            <Tab key={index}>{cat}</Tab>
          ))}
        </TabList>
        {categories.map((cat, index) => (
          <TabPanel key={index}>
            <OrderTab item={getCurrentPageItems(cat)} />
            <div className='flex gap-5 text-center ml-4 text-2xl'>
              <button onClick={() => prevPage(cat)} disabled={pagination[cat].page === 0}>Previous</button>
              <button onClick={() => nextPage(cat)} disabled={pagination[cat].page === Math.floor(menu?.filter(item => item.category === cat).length / itemsPerPage)}>Next</button>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Order;
