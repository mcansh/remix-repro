import { Outlet } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      foo
      <Outlet />
    </div>
  );
}
