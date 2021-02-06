import { HttpLink } from "apollo-link-http";

const link = new HttpLink({
  uri: "http://159.89.90.16/"
});

export default link;