import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Posts from './components/Posts';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Post} path='/posts/:slug' />
        <Route component={Posts} path='/posts' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
