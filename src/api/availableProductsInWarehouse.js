import api from './index';

const availableProductsInWarehouseApi = {
    // Fetch all available products in the warehouse specified by id and their available quantity
    getAvailableProductsInWarehouse: (id) => api.get(`available-products-in-warehouse/${id}`),

    // Retrieve the total quantity of inventory, considering all the products and their
    // corresponding quantities in the warehouse specified by id
    getTotalInventory: async (id) => {
        const inventoryDataForWarehouse = await availableProductsInWarehouseApi.getAvailableProductsInWarehouse(id);

        // Compute the total quantity of inventory in the specific warehouse
        const totalQuantityInventory = inventoryDataForWarehouse.reduce((total, item) =>  total + item.quantity, 0);

        return totalQuantityInventory;
    },
};

export default availableProductsInWarehouseApi;
