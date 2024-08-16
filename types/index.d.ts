declare type SignUpParams = {
  firstName?: string;
  lastName?: string;
  address?: string;
  email: string;
  password: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  firstName: string;
  lastName: string;
  name: string;
  address: string;
};

declare type SideFooterProps = {
  user: User;
  type?: "mobile" | "desktop";
};
