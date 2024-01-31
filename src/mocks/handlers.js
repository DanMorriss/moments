import { rest } from "msw";

const baseURL = "https://dan-morriss-drf-api-c0c866a91fa3.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 6,
        username: "Molly",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 6,
        profile_image: "https://res.cloudinary.com/deahxwfve/image/upload/v1/media/images/Screenshot_2024-01-30_at_13.13.33_jcnpzr"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];