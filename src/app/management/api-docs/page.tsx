"use client"


export default function ApiDocsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-dark)] text-[var(--text-light)]">
            <h1 className="text-3xl font-serif font-bold mb-4">API Documentation</h1>
            <p className="mb-8 text-[var(--text-dim)]">The API documentation is now hosted on the Backend server.</p>
            <a
                href="http://localhost:4000/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--accent-blue)] text-[var(--text-light)] rounded-md font-bold hover:bg-[var(--accent-blue-dim)] transition-colors"
            >
                Open Swagger UI
            </a>
        </div>
    );
}
