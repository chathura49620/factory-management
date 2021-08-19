import React, { Component } from "react";
import AddNewCAtegoryModal from '../Modals/AddNewCategoryModel';
const categoriesTable = ({ filteredItems}) => {
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((i) => (
          <tr
            key={i._id}
            className={
              "table-succes table-primary"
            }
          >
            <td>{i.userRoleNo}</td>
            <td>{i.categoryName}</td>
            <td><button className="btn btn-success btn-sm">Edit</button> <button className="btn btn-warning btn-sm" >Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default categoriesTable;
