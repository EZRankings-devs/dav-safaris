import { Fab, Hidden, TextField } from "@material-ui/core";
import React from "react";
import Dropdown from "../../UI/Dropdown/Dropdown";
import Search from "../../UI/Search/Search";
import classes from "./TourFilters.module.css";
import AddIcon from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";

const TourFilters = (props) => {
  const { addNew,setAddNew} = props
  const isLoading = false;
  return (
    <div className={classes.dav__tour_filters_wrapper}>
      <div className={classes.dav__tour_filter_item_wrapper}>
        <span className={classes.dav__add_new_tour_icon} onClick={()=>setAddNew(!addNew)}>
          <AddIcon />
          <Hidden xsDown>Add new</Hidden>
        </span>

        <div className={classes.dav__country_dropdown_wrapper}>
          <Dropdown selected="Filter by country" />
        </div>
      </div>
      <div className={classes.dav__tour_filter_item_wrapper}>
        <div className={classes.dav__tour_search_wrapper}>
          <TextField
            label="Search tours..."
            type="search"
            name="search"
            autoComplete="off"
            //   value={searchTerm}
            className={classes.gpa__dashboard_search_field}
            fullWidth
            variant="filled"
            size="small"
            //   onChange={SearchHandler}
          />
        </div>
        <Fab
          size="small"
          disabled={isLoading}
          color="primary"
          className={classes.dav__refresh_icon_wrapper}
          // onClick={RefreshHandler}
        >
          <RefreshIcon
            fontSize="small"
            className={`${isLoading ? classes.gpa__refreshing_icon : ""}`}
          />
        </Fab>
      </div>
    </div>
  );
};

export default TourFilters;
