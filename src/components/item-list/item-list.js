import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';
import { NavLink } from 'react-router-dom';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}>
          <NavLink to={`/starships/${id}`}>{label}</NavLink>
    {/* onClick={() => onItemSelected(id)}import { NavLink } from 'react-router-dom'; */}

        {/* {label} */}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;

// const { getAllPeople } = new SwapiService();

// export default withData(ItemList, getAllPeople);
