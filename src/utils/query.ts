import { gql } from "@apollo/client";

export const PRODUCTS = (currency: String) => gql`
  {
    products {
      id
      title
      image_url
      price(currency: ${currency})
    },
    currency
  }
  `;
