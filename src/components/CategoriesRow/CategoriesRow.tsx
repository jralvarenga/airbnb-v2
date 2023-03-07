'use client'

import React, { useState } from 'react'

// constants
import { CATEGORIES } from './CategoriesRow.constants'

export default function CategoriesRow() {
  const [selectedCategorie, setSelectedCategorie] = useState<string>(
    CATEGORIES[0]
  )

  return (
    <div className="scrollbar flex flex-1 gap-12 overflow-x-scroll pb-4 font-cereal-medium text-sm text-text-secondary">
      {CATEGORIES.map((categorie, i) => (
        <button
          key={i}
          onClick={() => setSelectedCategorie(categorie)}
          className={`flex flex-col items-center gap-1 border-b-2 pb-2 duration-150 hover:border-divider ${
            categorie === selectedCategorie
              ? 'border-text-main'
              : 'border-transparent'
          }`}
        >
          <img
            src={`./assets/img/categories/${categorie}.jpeg`}
            alt={categorie}
            className="h-7 w-7"
          />
          <span
            className={`whitespace-nowrap capitalize duration-150 ${
              categorie === selectedCategorie
                ? 'text-text-main'
                : 'text-text-secondary'
            }`}
          >
            {categorie.replaceAll('-', ' ').toLowerCase()}
          </span>
        </button>
      ))}
    </div>
  )
}
