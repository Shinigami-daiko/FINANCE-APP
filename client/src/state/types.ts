export interface ExpensesByCategory {
    salaries:number;
    services:number;
    supplies: number;
}

export interface Month {
id: string;
_id: string;
month: string;
nonOperationalExpenses: number;
operationalExpenses: number;
revenue: number;
expenses: number;

}

export interface Day {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
    
    }

export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalRevenue: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createdAt: string;
    upsatedAt:string;

}

export interface GetProductsResponse {
    id: string;
    _id: string;
    __v: number;
    price: number;
    expense: number;
    transactions: number;
    createdAt: string;
    upsatedAt:string;

}

export interface GetTransactionsResponse {
    id: string;
    _id: string;
    __v: number;
    buyer: string;
    amount: number;
    productIds: Array<string>;
    createdAt: string;
    upsatedAt:string;

}