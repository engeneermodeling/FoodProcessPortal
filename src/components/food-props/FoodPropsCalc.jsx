/**
 * FoodPropsCalc.jsx
 * Теплофізичні властивості харчових продуктів
 * Джерело: Методичні рекомендації НУХТ (Зоткіна Л.В. та ін., 2012)
 * + додаткові дані з Engineering ToolBox, ASHRAE, Codex Alimentarius
 *
 * Дані груп: ./data/<groupId>.js
 * UI: ./components/*
 */
import { useState } from "react";
import "./food-props.css";
import { FOOD_GROUPS, FOOD_GROUP_LIST } from "./data/index.js";
import GroupTab from "./components/GroupTab.jsx";
import ProductSelector from "./components/ProductSelector.jsx";
import DataTable from "./components/DataTable.jsx";

export default function FoodPropsCalc({ locale = "uk" }) {
  const groups = FOOD_GROUP_LIST;
  const [activeGroupId, setActiveGroupId] = useState("milk");
  const [activeProductId, setActiveProductId] = useState("milk_whole");

  const activeGroup = FOOD_GROUPS[activeGroupId];
  const activeProduct = activeGroup?.products.find((p) => p.id === activeProductId);

  const handleGroupChange = (groupId) => {
    setActiveGroupId(groupId);
    setActiveProductId(FOOD_GROUPS[groupId].products[0].id);
  };

  const ui = (uk, en, de) => ({ uk, en, de }[locale] || uk);

  return (
    <div className="fp-wrapper">
      <div className="fp-hero">
        <div className="fp-eyebrow">
          🍎 {ui("Харчові продукти і речовини", "Food Products & Materials", "Lebensmittel & Stoffe")}
        </div>
        <h2 className="fp-title">
          {ui(
            "Теплофізичні властивості харчових продуктів",
            "Thermophysical Properties of Food Products",
            "Thermophysikalische Eigenschaften von Lebensmitteln",
          )}
        </h2>
        <p className="fp-desc">
          {ui(
            "Довідкові дані для розрахунку теплообмінного обладнання: молоко, соки, цукор, борошно, м'ясо, шоколад та інші.",
            "Reference data for heat transfer equipment calculation: milk, juices, sugar, flour, meat, chocolate and more.",
            "Referenzdaten zur Berechnung von Wärmeübertragungsanlagen: Milch, Säfte, Zucker, Mehl, Fleisch, Schokolade und mehr.",
          )}
        </p>
        <div className="fp-badge">НУХТ · Зоткіна Л.В. та ін., 2012</div>
      </div>

      <div className="fp-groups">
        {groups.map((g) => (
          <GroupTab
            key={g.id}
            group={g}
            locale={locale}
            active={activeGroupId === g.id}
            onClick={() => handleGroupChange(g.id)}
          />
        ))}
      </div>

      {activeGroup && (
        <div className="fp-content">
          <ProductSelector
            products={activeGroup.products}
            locale={locale}
            selectedId={activeProductId}
            onChange={setActiveProductId}
          />
          <DataTable product={activeProduct} locale={locale} />
        </div>
      )}

      <footer className="fp-footer">
        <p>
          {ui(
            "Дані з методичних рекомендацій НУХТ «Теплофізичні властивості харчових продуктів» (Зоткіна Л.В., Малежик І.Ф., Зав'ялов В.Л. та ін., Київ, 2012). Для точних розрахунків рекомендується звіряти з першоджерелом.",
            'Data from NUFT methodological guidelines "Thermophysical Properties of Food Products" (Zotkina L.V. et al., Kyiv, 2012). Verify against original sources for precise engineering calculations.',
            "Daten aus den methodischen Empfehlungen der NUFT «Thermophysikalische Eigenschaften von Lebensmitteln» (Zotkina L.W. u.a., Kiew, 2012).",
          )}
        </p>
      </footer>
    </div>
  );
}
