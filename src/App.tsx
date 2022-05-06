import React, { ReactNode } from 'react';
import { Outlet, Router, Route, Link } from '@tanstack/react-location';
import { ThreeProvider } from './components/ThreeContext';
import { routes, location } from './routes';
import { TransitionPointsController } from './components/controller/TransitionPointsController';
import { Earth } from './components/controller/Earth';
import { MatrixMovie } from './components/controller/MatrixMovie';
import { SquareFly } from './components/controller/SquareFly';
import { Buble } from './components/controller/Buble';
import { Buble2 } from './components/controller/Buble2';
import { OutMaterial } from './components/controller/OutMaterial';
import { Shader1 } from './components/controller/Shader1';
import { Shader2 } from './components/controller/Shader2';
import { ExampleCanvas } from './temp/ExampleCanvas';
import { getUrl } from './utils/site';

const addRouters = (path: string, router: Route[], components: ReactNode[]): Route[] => {
  const routes = components.map((Component, index) => {
    return {
      path: '/' + (index + 1).toString(),
      element: Component,
    };
  });
  return [
    ...router,
    {
      path: path,
      children: routes,
    },
  ];
};
const productionRegister = (router: Route[]): Route[] => {
  if (process.env.NODE_ENV === 'production') {
    return [
      {
        path: 'saihate',
        children: router,
      }
    ];
  }
  return router;
}

const productComponents: ReactNode[] = [
  <ThreeProvider><TransitionPointsController /></ThreeProvider>,
  <ThreeProvider><Earth /></ThreeProvider>,
  <MatrixMovie />,
  <ThreeProvider><SquareFly /></ThreeProvider>,
  <ThreeProvider><Buble /></ThreeProvider>,
  <ThreeProvider><Buble2 /></ThreeProvider>,
  <ThreeProvider><OutMaterial /></ThreeProvider>,
  <ThreeProvider><Shader1 /></ThreeProvider>,
  <ThreeProvider><Shader2 /></ThreeProvider>,
  <ExampleCanvas />,
];


const registerProduct = (routes: Route[]) => addRouters('/products', routes, productComponents);

function App() {
  return (
    <div className="App">
      <Router routes={productionRegister(registerProduct(routes))} location={location}>
        <div className='flex z-0'>
          <nav className="w-80 flex-none z-10 bg-white sticky left-0 top-0">

            <div className='sticky px-4 py-2 flex top-0 bg-white z-10 items-center'>
              <p className='text-3xl'>
                <Link to={getUrl('/')}>
                  SAIHATE
                </Link>
              </p>
              <p className='text-xs ml-4'>v1.0.0</p>
            </div>

            <ul className='menu p-4'>
              <li>
                <Link to={getUrl('/')}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-current'>
                    <path d="M12.74 2.32001C12.6462 2.21689 12.532 2.1345 12.4046 2.07812C12.2771 2.02174 12.1393 1.99261 12 1.99261C11.8606 1.99261 11.7228 2.02174 11.5954 2.07812C11.4679 2.1345 11.3537 2.21689 11.26 2.32001L2.25997 12.32C2.12726 12.4631 2.03932 12.6419 2.00698 12.8344C1.97465 13.0268 1.99934 13.2245 2.07801 13.4031C2.15668 13.5817 2.28589 13.7334 2.44972 13.8395C2.61354 13.9455 2.80482 14.0013 2.99997 14H4.99997V21C4.99997 21.2652 5.10533 21.5196 5.29287 21.7071C5.4804 21.8947 5.73476 22 5.99997 22H18C18.2652 22 18.5195 21.8947 18.7071 21.7071C18.8946 21.5196 19 21.2652 19 21V14H21C21.2652 14 21.5195 13.8947 21.7071 13.7071C21.8946 13.5196 22 13.2652 22 13C22.0018 12.7487 21.909 12.506 21.74 12.32L12.74 2.32001Z" />
                  </svg>
                  <span>
                    TOP
                  </span>
                </Link>
              </li>
              <li>
                <Link to={getUrl('/about')}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-current'>
                    <path d="M17 22V14H13V16H15V22H12V24H20V22H17ZM16 8C15.7033 8 15.4133 8.08797 15.1666 8.2528C14.92 8.41762 14.7277 8.65189 14.6142 8.92597C14.5006 9.20006 14.4709 9.50166 14.5288 9.79264C14.5867 10.0836 14.7296 10.3509 14.9393 10.5607C15.1491 10.7704 15.4164 10.9133 15.7074 10.9712C15.9983 11.0291 16.2999 10.9994 16.574 10.8858C16.8481 10.7723 17.0824 10.58 17.2472 10.3334C17.412 10.0867 17.5 9.79667 17.5 9.5C17.5 9.10218 17.342 8.72064 17.0607 8.43934C16.7794 8.15804 16.3978 8 16 8V8Z" fill="black" />
                    <path d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2349 5.26429 19.1826 4.00001 16 4.00001V4.00001Z" fill="black" />
                  </svg>
                  <span>
                    about
                  </span>
                </Link>
              </li>

              <li />

              <li className="menu-title">
                <span>3D</span>
              </li>
              <li><Link to={getUrl('products', '1')}>秩序を持つ玉</Link></li>
              <li><Link to={getUrl('products', '2')}>込み上げる息吹</Link></li>
              <li><Link to={getUrl('products', '4')}>飛翔する三角</Link></li>
              <li><Link to={getUrl('products', '8')}>ノイズ</Link></li>
              <li><Link to={getUrl('products', '9')}>蠢く球体</Link></li>
              <li />
              <li className="menu-title">
                <span>2D</span>
              </li>
              <li><Link to={getUrl('products', '3')}>マトリックス風のマテリックス</Link></li>
              <li><Link to={getUrl('products', '5')}>蠢く文様</Link></li>
              <li><Link to={getUrl('products', '6')}>線の連続</Link></li>
              <li><Link to={getUrl('products', '10')}>反応拡散方程式</Link></li>
            </ul>
          </nav>

          <div className='w-full min-h-screen'>
            <Outlet />
          </div>
        </div>
      </Router>

    </div >
  );
}

export default App;
