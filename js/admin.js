import { addProduct } from "./db.js";

const form =
  document.getElementById("productForm");

const imageContainer =
  document.getElementById("imageContainer");

const addImageBtn =
  document.getElementById("addImageBtn");

// ➕ ADD IMAGE ROW
addImageBtn.addEventListener("click", () => {

  const row =
    document.createElement("div");

  row.className = "image-row";

  row.innerHTML = `

    <input type="url"
           class="image-input"
           placeholder="Image URL">

    <input type="file"
           class="image-file"
           accept="image/*">

    <button type="button"
            class="remove-btn">
      Remove
    </button>

  `;

  imageContainer.appendChild(row);

});

// ❌ REMOVE IMAGE ROW
imageContainer.addEventListener(
  "click",
  e => {

    if (
      e.target.classList.contains(
        "remove-btn"
      )
    ) {

      e.target.parentElement.remove();

    }

});

// 📦 SAVE PRODUCT
form.addEventListener(
  "submit",
  async e => {

    e.preventDefault();

    const imageRows =
      document.querySelectorAll(
        ".image-row"
      );

    const images = [];

    for (const row of imageRows) {

      const url =
        row.querySelector(".image-input")
          .value
          .trim();

      if (url) {

        images.push(url);

      }

    }

    const product = {

      name:
        document.getElementById("name")
          .value,

      price:
        Number(
          document.getElementById("price")
            .value
        ),

      originalPrice:
        Number(
          document.getElementById(
            "originalPrice"
          ).value
        ) || null,

      category:
        document.getElementById(
          "category"
        ).value,

      description:
        document.getElementById(
          "description"
        ).value,

      link:
        document.getElementById("link")
          .value,

      deal:
        document.getElementById("deal")
          .value === "true",

      images

    };

    await addProduct(product);

    alert("Product Added!");

    form.reset();

  }
);
