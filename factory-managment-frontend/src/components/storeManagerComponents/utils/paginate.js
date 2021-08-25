import _ from "lodash";

//paginting algo
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  let pgItems = _(items).slice(startIndex).take(pageSize).value();

  if (pgItems.length === 0) {
    let nowPage = pageNumber - 1;
    const startIndex = (nowPage - 1) * pageSize;
    pgItems = _(items).slice(startIndex).take(pageSize).value();
    return {
      it: pgItems,
      nw: nowPage,
    };
  }

  return {
    it: pgItems,
    nw: 0,
  };

  /*if (pgItems === null) {
   
    
    
    return {
      it: pgItems,
      nw: nowPage,
    };
  } else {
    return {
      it: pgItems,
      nw: 0,
    };
  }*/
}
