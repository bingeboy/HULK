(function () {
    "use strict";
    Core.createModule("search-box", function(sandbox) {
        var input, button, reset;

        return {
            init : function () {
                input = sandbox.query("#search_input")[0],
                    button = sandbox.query("#search_button")[0],
                    reset  = sandbox.query("#quit_search")[0];

                sandbox.addEvent(button, "click", this.handleSearch);
                sandbox.addEvent(reset, "click", this.quitSearch);

            },
            destroy : function () {
                sandbox.removeEvent(button, "click", this.handleSearch);
                sandbox.removeEvent(button, "click", this.quitSearch);
                input = button = reset = null;
            },
            handleSearch : function () {
                var query = input.value;
                if (query) {
                    sandbox.notify({
                                  type : 'perform-search',
                                  data : query
                              });
                }
            },
            quitSearch : function () {
                input.value = "";
                sandbox.notify({
                              type : 'quit-search',
                              data : null
                          });
            }
        };
    });


    Core.createModule("filters-bar", function (sandbox) {
        var filters;

        return {
            init : function () {
                filters = sandbox.query('a');
                sandbox.addEvent(filters, "click", this.filterProducts);
            },
            destroy : function () {
                sandbox.removeEvent(filters, "click", this.filterProducts);
                filter = null;
            },
            filterProducts : function (event) {
                sandbox.notify({
                              type : 'change-filter',
                              data : event.currentTarget.innerHTML
                          });
            }
        };
    });

    Core.createModule("product-panel", function (sandbox) {
        var products;

        function eachProduct(fn) {
            var i = 0, product;
            for ( ; product = products[i++]; ) {
                fn(product);
            }
        }
        function reset () {
            eachProduct(function (product) {
                product.style.opacity = '1';
            });
        }

        return {
            init : function () {
                var that = this;

                products = sandbox.query("li");
                sandbox.listen({
                              'change-filter' : this.change_filter,
                              'reset-filter'  : this.reset,
                              'perform-search': this.search,
                              'quit-search'   : this.reset
                          });
                eachProduct(function (product) {
                    sandbox.addEvent(product, 'click', that.addToCart);
                });
            },
            destroy : function () {
                var that = this;
                eachProduct(function (product) {
                    sandbox.removeEvent(product, 'click', that.addToCart);
                });
                sandbox.ignore(['change-filter', 'reset-filter', 'perform-search', 'quit-search']);
            },
            reset : reset,
            change_filter : function (filter) {
                reset();
                eachProduct(function (product) {
                    if (product.getAttribute("data-8088-keyword").toLowerCase().indexOf(filter.toLowerCase()) < 0) {
                        product.style.opacity = '0.2';
                    }
                });
            },
            search : function (query) {
                reset();
                query = query.toLowerCase();
                eachProduct(function (product) {
                    if (product.getElementsByTagName('p')[0].innerHTML.toLowerCase().indexOf(query) < 0) {
                        product.style.opacity = '0.2';
                    }
                });
            },
            addToCart : function (e) {
                var li = e.currentTarget;
                sandbox.notify({
                              type : 'add-item',
                              data : { id : li.id, name : li.getElementsByTagName('p')[0].innerHTML, price : parseInt(li.id, 10) }
                          });
            }
        };
    });


    Core.createModule("shopping-cart", function (sandbox) {
        var cart, cartItems;

        return {
            init : function () {
                cart = sandbox.query("ul")[0];
                cartItems = {};

                sandbox.listen({
                              'add-item' : this.addItem
                          });
            },
            destroy : function () {
                cart = cartItems = null;
                sandbox.ignore(['add-item']);
            },
            addItem : function (product) {
                var entry;
                entry = sandbox.find('#cart-' + product.id + ' .quantity')[0];
                if (entry) {
                    entry.innerHTML = parseInt(entry.innerHTML, 10) + 1;
                    cartItems[product.id]++;
                } else {
                    entry = sandbox.create_element("li", { id : "cart-" + product.id, children : [
                        sandbox.create_element("span", { 'class' : 'product_name', text : product.name }),
                        sandbox.create_element("span", { 'class' : 'quantity', text : '1' }),
                        sandbox.create_element("span", { 'class' : 'price', text : '$' + product.price.toFixed(2) })
                    ],
                        'class' : 'cart_entry' });
                    cart.appendChild(entry);
                    cartItems[product.id] = 1;
                }
            }
        };
    });


    Core.start_all();

}());
