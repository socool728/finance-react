import React from 'react';
import ReactDom from 'react-dom/client';
import {useParams} from 'react-router-dom';
import json from '../models/webdevtest-data.json';
import convertDateFormat from '../format/FormatDate';
const Promo = () => {
  let {promo_no} = useParams ();
  let data = json.promotion_objects[promo_no];
  console.log (data.drawings);
  let drawings = data.drawings.map (data => {
    return (
      <tr>
        <td>
          <p>{data.prize}</p>
        </td>
        <td>
          <p>{convertDateFormat (data.entry_deadline)}</p>
        </td>
        <td>
          <p>{convertDateFormat (data.drawing_date)}</p>
        </td>
      </tr>
    );
  });
  let entries = data.entries.map ((data, i) => {
    return (
      <tr>
        <td>
          <p>{data.entry_number}</p>
        </td>
        <td>
          <p>{convertDateFormat (data.date)}</p>
        </td>
      </tr>
    );
  });
  return (
    <section className="promo01">
      <div class="container">
        <h1 class="text-danger text-center mt-5">
          The Next Entry Deadline is Wednesday, October 22, 2015!
        </h1>
        <img
          class="rounded  mt-5 img-shadow"
          src={'../' + json.promotion_objects[promo_no].promo_image_url}
          id="image"
        />

        <p class="text-grey mb-0 mt-4" id="none">
          <strong>{json.promotion_objects[promo_no].promotion_name}</strong>
        </p>
        <p class="text-secondary ch_margin">
          <small>
            {json.promotion_objects[promo_no].summary}
          </small>
        </p>
      </div>
      <div class="container text-center mt-4">
        <p>
          <strong>Drwing Schedule</strong>
        </p>
        <table>
          <thead class="table-active">
            <th>
              <p>PRIZE</p>
            </th>
            <th>
              <p>ENTRY DEADLINE</p>
            </th>
            <th>
              <p>DRAWING DATE</p>
            </th>
          </thead>
          <tbody id="draw">
            {drawings}
          </tbody>
        </table>
        <p class="text-muted text-left">
          {json.promotion_objects[promo_no].entry_info}
        </p>
      </div>
      <div class="container text-center mt-4">
        <p class="mb-1">
          <strong>Your Total Tickets Entered: 2</strong>
        </p>
        <small class="text-muted" id="change_color">
          All entries are locked in at the time they are submitted and cannot be
          deleted
        </small>

        <table>
          <thead class="table-active">
            <th>
              <p>ENTRY NUMBER</p>
            </th>
            <th>
              <p>DATE</p>
            </th>
          </thead>
          <tbody class="entry">
            {entries}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Promo;
