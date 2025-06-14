-- Add document_url column to archive table
ALTER TABLE archive ADD COLUMN IF NOT EXISTS document_url TEXT;

-- Update existing rows to have null document_url
UPDATE archive SET document_url = NULL WHERE document_url IS NULL; 