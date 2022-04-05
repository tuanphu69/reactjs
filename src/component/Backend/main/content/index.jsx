import React from "react";



export default function Content() {
    return (
        <div id="app">
            <main>
                <section id="dashboard">
                    <h4>Hi, Welcome back</h4>
                    <div className="cards">
                        <div className="row mt-5"></div>
                    </div>
                    <div className="charts">
                        <div className="row mt-4">
                            <div className="col-lg-8 col-md-6 col-xs-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold">
                                            Website Visits
                                            </h6>
                                        <p className="card-text">
                                            (+43%) than last year
                                            </p>
                                        <div id="mixedchart"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold mb-4">
                                            Current Visits
                                            </h6>
                                        <div
                                            id="piechart"
                                            className="mb-4"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-8 col-md-6 col-xs-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold">
                                            Conversion Rates
                                            </h6>
                                        <p className="card-text">
                                            (+43%) than last year
                                            </p>
                                        <div id="barchart"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold">
                                            Current Subject
                                            </h6>
                                        <div id="radarchart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="others">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold mb-4">
                                            Traffic by Site
                                            </h6>
                                        <div
                                            id="traffic-by-site"
                                            className="row"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-xs-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold mb-4">
                                            Tasks
                                            </h6>
                                        <div id="tasks"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="users">
                    <div className="d-flex justify-content-between mt-5">
                        <h4>User</h4>
                        <a href="" className="btn btn-success shadow"
                        ><i className="fas fa-plus me-2"></i>
                            <span>New User</span>
                        </a>
                    </div>
                    <div className="users mt-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="search">
                                    <form
                                        className="
                                                d-flex
                                                justify-content-between
                                                align-items-center
                                            "
                                    >
                                        <i className="fas fa-search"></i>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search user..."
                                            aria-label="Search"
                                        />
                                        <button
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            name="delete"
                                            title="Filter list"
                                        >
                                            <img
                                                src="./assets/img/filter.svg"
                                                alt="Filter list"
                                                width="20"
                                            />
                                        </button>
                                    </form>
                                </div>
                                <div className="selected-action">
                                    <span></span>
                                    <button
                                        type="button"
                                        className="check-all-submit-btn"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="bottom"
                                        name="delete"
                                        title="Delete"
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                                <table
                                    className="table js-sort-table mt-5"
                                    id="users-table"
                                >
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <button>
                                                    <input
                                                        type="checkbox"
                                                        className="
                                                                form-check-input
                                                            "
                                                        id="input-checkboxAll"
                                                    />
                                                </button>
                                            </th>
                                            <th
                                                data-field="name"
                                                scope="col"
                                            >
                                                Name
                                                </th>
                                            <th
                                                data-field="company"
                                                scope="col"
                                            >
                                                Company
                                                </th>
                                            <th
                                                data-field="role"
                                                scope="col"
                                            >
                                                Role
                                                </th>
                                            <th
                                                data-field="verified"
                                                scope="col"
                                            >
                                                Verified
                                                </th>
                                            <th
                                                data-field="status"
                                                scope="col"
                                            >
                                                Status
                                                </th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <ul className="pagination">
                                    <li className="pagination-arrow arrow-left">
                                        <i className="fas fa-angle-left"></i>
                                    </li>
                                    <li className="pagination-number">1</li>
                                    <li className="pagination-number">2</li>
                                    <li className="pagination-number active">
                                        3
                                        </li>
                                    <li className="pagination-number">4</li>
                                    <li className="pagination-number">5</li>
                                    <li
                                        className="pagination-arrow arrow-right"
                                    >
                                        <i className="fas fa-angle-right"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="products">
                    <div className="product-title mt-5">
                        <h4>Products</h4>
                        <div className="action">
                            <div
                                className="filters"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasFilterProductRight"
                                aria-controls="offcanvasFilterProductRight"
                            >
                                <span>Filters</span>
                                <button>
                                    <img
                                        src="./assets/img/filter.svg"
                                        width="20"
                                    />
                                </button>
                            </div>

                            <div
                                className="offcanvas offcanvas-end"
                                tabindex="-1"
                                id="offcanvasFilterProductRight"
                                aria-labelledby="offcanvasFilterProductRightLabel"
                            >
                                <div className="offcanvas-header">
                                    <h6
                                        id="offcanvasFilterProductRightLabel"
                                    >
                                        Filters
                                        </h6>
                                    <button
                                        type="button"
                                        className="btn-close text-reset"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="gender">
                                        <h6>Gender</h6>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="men"
                                                id="men"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="men"
                                            >
                                                Men
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="women"
                                                id="women"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="women"
                                            >
                                                Women
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value="kids"
                                                id="kids"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="kids"
                                            >
                                                Kids
                                                </label>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <h6>Category</h6>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductCategory"
                                                id="flexRadioFilterProductCategory1"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductCategory1"
                                            >
                                                All
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductCategory"
                                                id="flexRadioFilterProductCategory2"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductCategory2"
                                            >
                                                Shose
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductCategory"
                                                id="flexRadioFilterProductCategory3"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductCategory3"
                                            >
                                                Apparel
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductCategory"
                                                id="flexRadioFilterProductCategory4"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductCategory4"
                                            >
                                                Accessories
                                                </label>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <h6>Price</h6>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductPrice"
                                                id="flexRadioFilterProductPrice1"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductPrice1"
                                            >
                                                Below $25
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductPrice"
                                                id="flexRadioFilterProductPrice2"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductPrice2"
                                            >
                                                Between $25 - $75
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioFilterProductPrice"
                                                id="flexRadioFilterProductPrice3"
                                            />
                                            <label
                                                className="form-check-label"
                                                for="flexRadioFilterProductPrice3"
                                            >
                                                Above $75
                                                </label>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <h6>Rating</h6>
                                        <div className="form-check">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <span className="ms-2">& Up</span>
                                        </div>
                                        <div className="form-check">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <span className="ms-2">& Up</span>
                                        </div>
                                        <div className="form-check">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <span className="ms-2">& Up</span>
                                        </div>
                                        <div className="form-check">
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <span className="ms-2">& Up</span>
                                        </div>
                                    </div>
                                    <div
                                        className="clear-all"
                                        data-bs-dismiss="offcanvas"
                                    >
                                        <img
                                            src="./assets/img/rubber.svg"
                                            width="20"
                                        />
                                        <h6 className="ms-2">Clear All</h6>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="sort-by dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <h6>
                                    Sort By:
                                        <span className="caret">Newest</span>
                                </h6>
                            </button>

                            <ul
                                className="
                                        dropdown-menu dropdown-menu-end
                                        shadow
                                    "
                            >
                                <li>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        value="Featured"
                                    >
                                        Featured
                                        </button>
                                </li>
                                <li className="active">
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        value="Newest"
                                    >
                                        Newest
                                        </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        value="Price: High-Low"
                                    >
                                        Price: High-Low
                                        </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        value="Price: Low-High"
                                    >
                                        Price: Low-High
                                        </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="products">
                        <div className="products-list row mt-5"></div>
                    </div>
                </section>
                <section id="blogs">
                    <div className="d-flex justify-content-between mt-5">
                        <h4>Blog</h4>
                        <a href="" className="btn btn-success shadow"
                        ><i className="fas fa-plus me-2"></i>
                            <span>New Post</span>
                        </a>
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <form
                            className="
                                    form-search
                                    d-flex
                                    justify-content-between
                                    align-items-center
                                "
                        >
                            <i className="fas fa-search"></i>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search post..."
                                aria-label="Search"
                            />
                        </form>
                        <select className="form-select">
                            <option value="lasted" selected>Lasted</option>
                            <option value="popular">Popular</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                    <div className="blogs">
                        <div className="blogs-list row mt-5"></div>
                    </div>
                </section>
            </main>
        </div>
    );
}
