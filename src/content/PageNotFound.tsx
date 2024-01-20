import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function PageNotFound() {
  return (
    <Page
      titleText="404 - Page not found"
      subtitleElement={<p>If you think there should be a page here, email me at jeffrey@functionalgeneralist.com.</p>}
    >

    </Page>
  )
}