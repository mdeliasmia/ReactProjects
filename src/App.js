
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToSection from './components/scroll-to-top-and-bottom/ScrollToSection';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom/ScrollToTopAndBottom';
import UseWindowResizeTest from './components/use-window-resize-custom-hook/UseWindowResizeTest';
import UseOnclickOutsideTest from './components/use-outside-click-custom-hook/UseOnclickOutsideTest';
import UseFetchHookTest from './components/use-fetch-custom-hook/test';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag/FeatureFlags';
import TicTacToe from './components/tic-tact-toe/TicTacToe';
import SearchAutocomplete from './components/search-autocomplete-with-api/SearchAutocomplete';
import GithubProfileFinder from './components/github-profile-finder/GithubProfileFinder';
import ModalTest from './components/modal-popup/ModalText';
import TabTest from './components/custom-tabs/tabs-test';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
import LightDarkMode from './components/light-dark-theme-switch/LightDarkMode';
import QRCodeGenerator from './components/qr-code-generator/QRCodeGenerator';
import TreeView from './components/tree-view/TreeView';
import menus from './components/tree-view/data';
import LoadMoreData from './components/load-more-data/LoadMoreData';
import ImageSlider from './components/image-slider/ImageSlider';
import StarRating from './components/star-rating/StarRating';
import RandomColor from './components/random-color/RandomColor';
import Accordian from './components/accordian/Accordian';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accordian' element={<Accordian />} />
        <Route path='/randomColor' element={<RandomColor />} />
        <Route path='/starRating' element={<StarRating noOfStars={10} />} />
        <Route path='/imageSlider' element={<ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"} />} />
        <Route path='/loadMoreData' element={<LoadMoreData />} />
        <Route path='/treeView' element={<TreeView menus={menus} />} />
        <Route path='/qrCodeGenerator' element={<QRCodeGenerator />} />
        <Route path='/lightDarkMode' element={<LightDarkMode />} />
        <Route path='/scrollIndicator' element={<ScrollIndicator url={`https://dummyjson.com/products?limit=100`} />} />
        <Route path='/tabTest' element={<TabTest />} />
        <Route path='/modalTest' element={<ModalTest />} />
        <Route path='/githubProfileFinder' element={<GithubProfileFinder />} />
        <Route path='/searchAutocomplete' element={<SearchAutocomplete />} />
        <Route path='/ticTacToe' element={<TicTacToe />} />
        <Route path='/useFetchHookTest' element={<UseFetchHookTest />} />
        <Route path='/useOnclickOutsideTest' element={<UseOnclickOutsideTest />} />
        <Route path='/useWindowResizeTest' element={<UseWindowResizeTest />} />
        <Route path='/scrollToTopAndBottom' element={<ScrollToTopAndBottom />} />
        <Route path='/scrollToSection' element={<ScrollToSection />} />
      </Routes>

      {/** Feature Flag Implementation Component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      <Footer />



      {/**Accodian COmponent */}
      {/* <Accordian /> */}

      {/**Random Color COmponent */}
      {/* <RandomColor /> */}

      {/**Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/**ImageSlider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"} /> */}

      {/**Load More Data Component */}
      {/* <LoadMoreData /> */}

      {/**Tree View Component/MenuUI/Recursive Navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/**QRCode Generator */}
      {/* <QRCodeGenerator /> */}

      {/**Light Dark Theme Switch */}
      {/* <LightDarkMode /> */}

      {/**Scroll Indicator Component */}
      {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}

      {/**Custom Tabs Component */}
      {/* <TabTest /> */}

      {/**Modal Component */}
      {/* <ModalTest /> */}

      {/** Github Profile Finder Component */}
      {/* <GithubProfileFinder /> */}

      {/** Search Autocomplete with API implementation Component */}
      {/* <SearchAutocomplete /> */}

      {/** Tic Tac Toe Component */}
      {/* <TicTacToe /> */}

      {/** Feature Flag Implementation Component */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch Custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* useOnclickOutside Custom Hook*/}
      {/* <UseOnclickOutsideTest /> */}

      {/* useWindowResize / useResponsive Custom Hook*/}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll to Top and Bottom Component*/}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll to Top and Bottom Component*/}
      {/* <ScrollToSection /> */}

    </div>
  );
}

export default App;
