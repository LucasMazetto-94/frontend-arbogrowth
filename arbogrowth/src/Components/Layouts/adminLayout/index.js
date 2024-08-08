import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
