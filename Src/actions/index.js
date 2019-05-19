export const emailChanged = text =>
{
    return {
        type : "email_changed",
        text
    };
};
export const passwordChanged = text =>
{
    return {
        type : "password_changed",
        text
    };
};
export const signedIn = () =>
{
    return {
        type : "signed_in"
    };
};
export const signedOut = () =>
{
    return {
        type : "signed_out"
    };
};