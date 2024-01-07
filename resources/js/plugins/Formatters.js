export const formatPrice = (price) =>
    new Intl.NumberFormat("es", {
        style: "currency",
        currency: "MXN",
    }).format(price);

export const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("es", {
        day: "numeric",
        year: "2-digit",
        month: "short",
        time: "full",
    });
