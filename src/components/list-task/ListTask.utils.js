export const textToLink = (text) => {
    switch (text) {
        case 'application setup':
            return 'application-setup';
        case 'static book list':
            return 'static-book-list';
        case 'administration panel':
            return 'administration-panel';
        case 'connect admin with frontend':
            return 'connect-admin-with-frontend';
        case 'book review feature':
            return 'book-review-feature';
        default:
            return '';
    }
}