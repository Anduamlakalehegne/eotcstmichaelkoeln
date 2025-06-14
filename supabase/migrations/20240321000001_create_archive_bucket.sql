-- Create the archive bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('archive', 'archive', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the archive bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'archive');

CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'archive'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can update"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'archive'
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'archive'
  AND auth.role() = 'authenticated'
); 