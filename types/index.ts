import express from "express";

export namespace MenuItem {
    export interface IItem {
        name: string;
        imageURL: string;
        description: string;
        price: number;
        category: string;
        ingredients: string[];
        addedBy?: any;
    }

    export interface IItemQuery {
        categories?: string,
        searchTerms?: string,
        page?: number,
        maxPrice?: number
    }

    // without generic types
    // export interface IItemRequest extends express.Request {
    //     body: IItem
    // }

    // with generic types
    export interface IItemRequest extends express.Request<{ id: string }, {}, IItem, IItemQuery> { }

    // export type abc ...
    // export enum xyz ...
}

export namespace User {
    export interface IUser {
        email: string,
        password: string,
        role: string,
        fullName: string,
        imageURL: string,
        authToken: string
    }

    export interface IUserRequest extends express.Request<{}, {}, IUser, {}> { }
    export interface ILoginRequest extends express.Request<{}, {}, {
        email: string,
        password: string
    }, {}> { }
}

/**
 * Generic Types:
 * the following code is not actually related to the project
 */
interface IObj<T> {
    value: T;
    history: T[];
}

const x: IObj<number> = {
    value: 90,
    history: [1, 2, 3]
}

const y: IObj<string> = {
    value: 'hello',
    history: ['hello', 'world', '!']
}

const items: IObj<MenuItem.IItem> = {
    value: {
        name: 'name',
        price: 10,
        category: 'category',
        description: '',
        imageURL: '',
        ingredients: []
    },
    history: []
}