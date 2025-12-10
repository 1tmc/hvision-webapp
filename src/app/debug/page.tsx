'use client';

import React, { useState, useEffect } from 'react';
import { sanityClient } from '@/app/lib/sanity.api';

interface DebugProperty {
  _id: string;
  title: string;
  images?: unknown;
}

export default function SanityDebug() {
  const [status, setStatus] = useState<string>('Testing connection...');
  const [properties, setProperties] = useState<DebugProperty[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        // Test 1: Check if client is configured
        setStatus('✓ Client configured');
        
        // Test 2: Fetch raw data
        const query = `*[_type == "property"][0...3] {
          _id,
          title,
          images
        }`;
        
        const data = await sanityClient.fetch<DebugProperty[]>(query);
        
        if (data.length === 0) {
          setStatus('⚠️ No properties found in Sanity');
          setError('No documents with type "property" exist in your Sanity dataset');
        } else {
          setStatus(`✓ Found ${data.length} properties`);
          setProperties(data);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setStatus('❌ Connection failed');
        setError(errorMessage);
      }
    }
    
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sanity Connection Test</h1>
        
        <div className="bg-white rounded-lg p-6 mb-6 shadow">
          <h2 className="text-xl font-semibold mb-3">Connection Status</h2>
          <p className="text-lg">{status}</p>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
              <p className="text-red-800 font-semibold">Error:</p>
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>

        {properties.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Sample Properties (Raw Data)</h2>
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
              {JSON.stringify(properties, null, 2)}
            </pre>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
          <h3 className="font-semibold text-blue-900 mb-2">Troubleshooting Steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Check if you have documents in Sanity Studio at <a href="http://localhost:3000/studio" className="underline">localhost:3000/studio</a></li>
            <li>Verify your document type is named -property- (case-sensitive)</li>
            <li>Make sure images are uploaded with the correct structure</li>
            <li>Check browser console for any error messages</li>
          </ol>
        </div>
      </div>
    </div>
  );
}