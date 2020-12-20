export function generateAuthHeader(token: string | null) {
    if (token == null) {
        return {};
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

export const CLIENT_ID = "J2SE9ISqcHgbi2fJ3aNBRV5qIwzo3yoH8jgc8l5U";
export const CLIENT_SECRET = "6yTiFNcwG2l0TyyDde3hkycwLLWXVTyFhnDYuhChBHvJ56aAXymRYEd8WqpAn8Hui8aJLn8sdpi1cer8adVL2ndmJFI4SO2nRMpN2tq2xHtRHsiXIso5eh8XYniRI4jb"