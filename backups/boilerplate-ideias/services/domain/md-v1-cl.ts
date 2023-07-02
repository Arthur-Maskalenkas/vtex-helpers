export type MDV1CL = {
    age: string;
    approved: boolean;
    attach: File;
    birthDate: Date;
    brandPurchasedTag: string;
    brandVisitedTag: string;
    businessPhone: string;
    carttag: string;
    categoryPurchasedTag: string;
    categoryVisitedTag: string;
    checkouttag: string;
    chestMeasure: string;
    corporateDocument: string;
    corporateName: string;
    customerClass: string;
    departmentVisitedTag: string;
    document: string;
    documentType: string;
    email: string;
    firstName: string;
    gender: string;
    height: string;
    homePhone: string;
    isCorporate: boolean;
    isNewsletterOptIn: boolean;
    lastName: string;
    localeDefault: string;
    phone: string;
    priceTables: string;
    productPurchasedTag: string;
    productVisitedTag: string;
    profilePicture: File;
    rclastcart: string;
    rclastcartvalue: string;
    rclastsession: string;
    rclastsessiondate: Date;
    saram: string;
    stateRegistration: string;
    tradeName: string;
    userId: string;
    visitedProductWithStockOutSkusTag: string;
    waistMeasure: string;
    weight: string;
}


export type MDV1CLKeys = keyof MDV1CL
