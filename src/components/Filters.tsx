import React from "react";

interface Props {
  categories: string[];
  selected: string[];
  sort: string;
  onChange: (cats: string[], sort: string) => void;
}

const Filters: React.FC<Props> = ({ categories, selected, sort, onChange }) => {
  const toggleCategory = (cat: string) => {
    const newSelected = selected.includes(cat)
      ? selected.filter((c) => c !== cat)
      : [...selected, cat];
    onChange(newSelected, sort);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(selected, e.target.value);
  };

  const clearFilters = () => onChange([], "");

  return (
    <aside className="filters" aria-label="Filters">
      <fieldset>
        <legend className="filter-title">Categories</legend>
        {categories.map((c) => (
          <label key={c} className="checkbox" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && toggleCategory(c)}>
            <input type="checkbox" checked={selected.includes(c)} onChange={() => toggleCategory(c)} />
            <span>{c}</span>
          </label>
        ))}
      </fieldset>

      <label className="sort" htmlFor="sort">Sort by:</label>
      <select id="sort" value={sort} onChange={handleSort}>
        <option value="">Default</option>
        <option value="price_asc">Price: low → high</option>
        <option value="price_desc">Price: high → low</option>
      </select>

      <button className="btn clear-btn" onClick={clearFilters}>Clear</button>
    </aside>
  );
};

export default Filters;
