import { items } from "../data/items";

const baseUrl = "http://localhost:3000/menu-items";

export class MenuService {
  private static instance: MenuService;
  private errorMsg?: string;

  public static getInstance(): MenuService {
    if (!MenuService.instance) {
      MenuService.instance = new MenuService();
    }

    return MenuService.instance;
  }

  async getMenuItems() {
    let errorMsg = "";
    try {
      const items = await fetch(`${baseUrl}`);
      const itemsJson = await items.json();
      return itemsJson;
    } catch (error: any) {
      errorMsg = error.message;
    }
  }

  async getMenuItemDetails(id: Number) {
    let errorMsg = "";
    try {
      const itemDetails = await fetch(`${baseUrl}/${id}`);
      const itemDetailsJson = await itemDetails.json();
      return itemDetailsJson;
    } catch (error: any) {
      errorMsg = error.message;
      return errorMsg;
    }
  }

  async saveMenuItem(details: any) {
    let errorMsg = "";
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    };
    try {
      const itemDetails = await fetch(
        `${baseUrl}/${details.id}`,
        requestOptions
      );
      const itemDetailsJson = await itemDetails.json();
      return itemDetailsJson;
    } catch (error: any) {
      errorMsg = error.message;
      return errorMsg;
    }
  }

  async addMenuItem(details: any) {
    let errorMsg = "";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    };
    try {
      const itemDetails = await fetch(`${baseUrl}/`, requestOptions);
      const itemDetailsJson = await itemDetails.json();
      return itemDetailsJson;
    } catch (error: any) {
      errorMsg = error.message;
      return errorMsg;
    }
  }

  async deleteMenuItem(id: number) {
    let errorMsg = "";
    const requestOptions = {
      method: "DELETE",
    };
    try {
      await fetch(`${baseUrl}/${id}`, requestOptions);
    } catch (error: any) {
      errorMsg = error.message;
      return errorMsg;
    }
  }
}
