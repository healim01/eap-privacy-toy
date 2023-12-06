import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Start from "./routes/start";
import Home from "./routes/home";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: black;
`;

const Center = styled.div`
  width: 100vw;
  max-width: 400px;
  color: white;
  height: calc(var(--vh, 1vh) * 100);
  min-height: auto;
  background-image: url(/bgImg.jpg);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: top center;
`;

function Router() {
  return (
    <BrowserRouter>
      <Helmet>
        <title> EAP04 </title>
      </Helmet>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
