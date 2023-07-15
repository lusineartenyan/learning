import {items} from '../data/items'

export class MenuService {
    async getMenuItems() {
        const items = await fetch("http://localhost:3000/")
        const itemsJson = await items.json()
        return itemsJson;
    }

    async getMenuItemDetails(id:Number) {
        const itemDetails = await fetch(`http://localhost:3000/menu-item/${id}`)
        const itemDetailsJson = await itemDetails.json()
        return itemDetailsJson;
    }

    async saveMenuItem(details:any) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        }
        const itemDetails = await fetch(`http://localhost:3000/menu-item/${details.id}`, requestOptions)
        const itemDetailsJson = await itemDetails.json()
        return itemDetailsJson;
    }

    async addMenuItem(details:any) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        }
        const itemDetails = await fetch(`http://localhost:3000/menu-item`, requestOptions)
        const itemDetailsJson = await itemDetails.json()
        return itemDetailsJson;
    }

    async deleteMenuItem(id:number) {
        const requestOptions = {
            method: 'DELETE'
        }
        await fetch(`http://localhost:3000/menu-item/${id}`, requestOptions)
    }
}