/**
 * @type with a single karma_total item from the database.
 */
export type TypeKarmaTotal = {
    id: number;
    userID: string;
    serverID: string;
    total: number;
    updated_at: Date;
    created_at: Date;
};
