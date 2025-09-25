-- =====================================================
-- Ethiopian Church Complete Database Setup Script
-- PostgreSQL Database Schema for cPanel
-- =====================================================

-- Step 1: Enable UUID extension
-- =====================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Step 2: Create Required Functions
-- =====================================================

-- Function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Function to update blog updated_at column
CREATE OR REPLACE FUNCTION update_blog_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- =====================================================
-- Step 3: Create Database Tables
-- =====================================================

-- 1. Profiles Table (Updated with authentication fields)
CREATE TABLE public.profiles (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  email character varying(255) NOT NULL UNIQUE,
  password_hash text NULL,
  first_name character varying(255) NULL,
  last_name character varying(255) NULL,
  avatar_url text NULL,
  role character varying(50) NULL DEFAULT 'user',
  is_admin boolean NULL DEFAULT false,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT profiles_pkey PRIMARY KEY (id)
);

-- 2. Tags Table
CREATE TABLE public.tags (
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT tags_pkey PRIMARY KEY (id),
  CONSTRAINT tags_name_key UNIQUE (name)
);

-- 3. News Table
CREATE TABLE public.news (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text NULL,
  category character varying(100) NOT NULL,
  featured boolean NULL DEFAULT false,
  author character varying(255) NOT NULL,
  author_role character varying(255) NULL,
  author_image text NULL,
  read_time character varying(50) NULL,
  publish_date timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  tags text[] NULL,
  related_news text[] NULL,
  related_images text NULL,
  language character varying(2) NOT NULL DEFAULT 'en'::character varying,
  CONSTRAINT news_pkey PRIMARY KEY (id)
);

-- Create indexes for news table
CREATE INDEX IF NOT EXISTS idx_news_category ON public.news USING btree (category);
CREATE INDEX IF NOT EXISTS idx_news_featured ON public.news USING btree (featured);
CREATE INDEX IF NOT EXISTS idx_news_publish_date ON public.news USING btree (publish_date);

-- 4. News Images Table
CREATE TABLE public.news_images (
  id serial NOT NULL,
  news_id integer NULL,
  image_url text NOT NULL,
  caption text NULL,
  display_order integer NULL DEFAULT 0,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT news_images_pkey PRIMARY KEY (id),
  CONSTRAINT news_images_news_id_fkey FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE
);

-- 5. News Tags Table
CREATE TABLE public.news_tags (
  id serial NOT NULL,
  news_id integer NULL,
  tag_id integer NULL,
  CONSTRAINT news_tags_pkey PRIMARY KEY (id),
  CONSTRAINT news_tags_news_id_tag_id_key UNIQUE (news_id, tag_id),
  CONSTRAINT news_tags_news_id_fkey FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE,
  CONSTRAINT news_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
);

-- Create indexes for news_tags table
CREATE INDEX IF NOT EXISTS idx_news_tags_news_id ON public.news_tags USING btree (news_id);
CREATE INDEX IF NOT EXISTS idx_news_tags_tag_id ON public.news_tags USING btree (tag_id);

-- 6. Events Table
CREATE TABLE public.events (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  time time NULL,
  location character varying(255) NULL,
  address text NULL,
  image_url text NULL,
  category character varying(100) NOT NULL,
  featured boolean NULL DEFAULT false,
  organizer character varying(255) NULL,
  contact character varying(255) NULL,
  max_attendees integer NULL,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  language character varying(2) NOT NULL DEFAULT 'en'::character varying,
  CONSTRAINT events_pkey PRIMARY KEY (id)
);

-- Create indexes for events table
CREATE INDEX IF NOT EXISTS idx_events_date ON public.events USING btree (date);
CREATE INDEX IF NOT EXISTS idx_events_category ON public.events USING btree (category);
CREATE INDEX IF NOT EXISTS idx_events_featured ON public.events USING btree (featured);

-- 7. Event Gallery Table
CREATE TABLE public.event_gallery (
  id serial NOT NULL,
  event_id integer NULL,
  image_url text NOT NULL,
  caption text NULL,
  display_order integer NULL DEFAULT 0,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT event_gallery_pkey PRIMARY KEY (id),
  CONSTRAINT event_gallery_event_id_fkey FOREIGN KEY (event_id) REFERENCES events (id) ON DELETE CASCADE
);

-- Create indexes for event_gallery table
CREATE INDEX IF NOT EXISTS idx_event_gallery_event_id ON public.event_gallery USING btree (event_id);

-- 8. Event RSVPs Table
CREATE TABLE public.event_rsvps (
  id serial NOT NULL,
  event_id integer NULL,
  name character varying(255) NOT NULL,
  email character varying(255) NOT NULL,
  phone character varying(50) NULL,
  guests integer NULL DEFAULT 1,
  message text NULL,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT event_rsvps_pkey PRIMARY KEY (id),
  CONSTRAINT event_rsvps_event_id_fkey FOREIGN KEY (event_id) REFERENCES events (id) ON DELETE CASCADE
);

-- Create indexes for event_rsvps table
CREATE INDEX IF NOT EXISTS idx_event_rsvps_event_id ON public.event_rsvps USING btree (event_id);

-- 9. Related Events Table
CREATE TABLE public.related_events (
  id serial NOT NULL,
  event_id integer NULL,
  related_event_id integer NULL,
  CONSTRAINT related_events_pkey PRIMARY KEY (id),
  CONSTRAINT related_events_event_id_related_event_id_key UNIQUE (event_id, related_event_id),
  CONSTRAINT related_events_event_id_fkey FOREIGN KEY (event_id) REFERENCES events (id) ON DELETE CASCADE,
  CONSTRAINT related_events_related_event_id_fkey FOREIGN KEY (related_event_id) REFERENCES events (id) ON DELETE CASCADE
);

-- Create indexes for related_events table
CREATE INDEX IF NOT EXISTS idx_related_events_event_id ON public.related_events USING btree (event_id);
CREATE INDEX IF NOT EXISTS idx_related_events_related_event_id ON public.related_events USING btree (related_event_id);

-- 10. Related News Table
CREATE TABLE public.related_news (
  id serial NOT NULL,
  news_id integer NULL,
  related_news_id integer NULL,
  CONSTRAINT related_news_pkey PRIMARY KEY (id),
  CONSTRAINT related_news_news_id_related_news_id_key UNIQUE (news_id, related_news_id),
  CONSTRAINT related_news_news_id_fkey FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE,
  CONSTRAINT related_news_related_news_id_fkey FOREIGN KEY (related_news_id) REFERENCES news (id) ON DELETE CASCADE
);

-- Create indexes for related_news table
CREATE INDEX IF NOT EXISTS idx_related_news_news_id ON public.related_news USING btree (news_id);
CREATE INDEX IF NOT EXISTS idx_related_news_related_news_id ON public.related_news USING btree (related_news_id);

-- 11. Gallery Folders Table
CREATE TABLE public.gallery_folders (
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  description text NULL,
  display_order integer NULL DEFAULT 0,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT gallery_folders_pkey PRIMARY KEY (id)
);

-- 12. Gallery Table
CREATE TABLE public.gallery (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  description text NULL,
  image_url text NOT NULL,
  category character varying(100) NULL,
  folder_id integer NULL,
  display_order integer NULL DEFAULT 0,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT gallery_pkey PRIMARY KEY (id),
  CONSTRAINT gallery_folder_id_fkey FOREIGN KEY (folder_id) REFERENCES gallery_folders (id) ON DELETE SET NULL
);

-- Create indexes for gallery table
CREATE INDEX IF NOT EXISTS idx_gallery_category ON public.gallery USING btree (category);
CREATE INDEX IF NOT EXISTS idx_gallery_display_order ON public.gallery USING btree (display_order);

-- 13. Video Folders Table
CREATE TABLE public.video_folders (
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  description text NULL,
  display_order integer NULL DEFAULT 0,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT video_folders_pkey PRIMARY KEY (id)
);

-- 14. Videos Table
CREATE TABLE public.videos (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  description text NULL,
  video_url text NOT NULL,
  thumbnail_url text NULL,
  category character varying(100) NULL,
  folder_id integer NULL,
  display_order integer NULL DEFAULT 0,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT videos_pkey PRIMARY KEY (id),
  CONSTRAINT videos_folder_id_fkey FOREIGN KEY (folder_id) REFERENCES video_folders (id) ON DELETE SET NULL
);

-- Create indexes for videos table
CREATE INDEX IF NOT EXISTS videos_category_idx ON public.videos USING btree (category);
CREATE INDEX IF NOT EXISTS videos_created_at_idx ON public.videos USING btree (created_at DESC);

-- 15. Blog Table
CREATE TABLE public.blog (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text NULL,
  author character varying(255) NOT NULL,
  publish_date timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  language character varying(2) NOT NULL DEFAULT 'en'::character varying,
  CONSTRAINT blog_pkey PRIMARY KEY (id)
);

-- Create indexes for blog table
CREATE INDEX IF NOT EXISTS idx_blog_language ON public.blog USING btree (language);
CREATE INDEX IF NOT EXISTS idx_blog_created_at ON public.blog USING btree (created_at DESC);

-- 16. Announcements Table
CREATE TABLE public.announcements (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  content text NOT NULL,
  priority character varying(20) NULL DEFAULT 'normal',
  is_active boolean NULL DEFAULT true,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT announcements_pkey PRIMARY KEY (id)
);

-- 17. Archive Table
CREATE TABLE public.archive (
  id serial NOT NULL,
  title character varying(255) NOT NULL,
  description text NULL,
  year integer NOT NULL,
  type character varying(50) NOT NULL,
  category character varying(100) NOT NULL,
  image_url text NULL,
  document_url text NULL,
  tags text[] NULL,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT archive_pkey PRIMARY KEY (id)
);

-- Create indexes for archive table
CREATE INDEX IF NOT EXISTS archive_category_idx ON public.archive USING btree (category);
CREATE INDEX IF NOT EXISTS archive_type_idx ON public.archive USING btree (type);
CREATE INDEX IF NOT EXISTS archive_year_idx ON public.archive USING btree (year);

-- 18. Church Calendars Table
CREATE TABLE public.church_calendars (
  id serial NOT NULL,
  year integer NOT NULL,
  title character varying(255) NOT NULL,
  file_path text NOT NULL,
  file_name character varying(255) NOT NULL,
  file_size bigint NOT NULL,
  mime_type character varying(100) NOT NULL,
  is_active boolean NULL DEFAULT true,
  created_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT church_calendars_pkey PRIMARY KEY (id),
  CONSTRAINT church_calendars_year_key UNIQUE (year)
);

-- Create indexes for church_calendars table
CREATE INDEX IF NOT EXISTS idx_church_calendars_year ON public.church_calendars USING btree (year);

-- =====================================================
-- Step 4: Create Triggers
-- =====================================================

-- Create triggers for updated_at columns
CREATE TRIGGER update_blog_updated_at 
  BEFORE UPDATE ON blog 
  FOR EACH ROW 
  EXECUTE FUNCTION update_blog_updated_at_column();

CREATE TRIGGER update_videos_updated_at 
  BEFORE UPDATE ON videos 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_archive_updated_at 
  BEFORE UPDATE ON archive 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_church_calendars_updated_at 
  BEFORE UPDATE ON church_calendars 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Step 5: Insert Initial Data
-- =====================================================

-- Create initial admin user
INSERT INTO profiles (id, email, first_name, last_name, role, is_admin, password_hash) 
VALUES (
    uuid_generate_v4(),
    'admin@ethiopianchurch.com',
    'Admin',
    'User',
    'admin',
    true,
    '$2b$10$rQZ8K9X2Y1W3V4U5T6S7R8Q9P0O1N2M3L4K5J6I7H8G9F0E1D2C3B4A5' -- admin123
);

-- Insert some sample tags
INSERT INTO tags (name) VALUES 
('Church Events'),
('Community'),
('Spiritual'),
('Education'),
('Charity'),
('Youth'),
('Elderly'),
('Family');

-- Insert sample news
INSERT INTO news (title, excerpt, content, category, featured, author, author_role, read_time, tags, language) VALUES 
(
    'Welcome to Our Church Community',
    'Join us in celebrating our vibrant church community and the spiritual journey we share together.',
    'Our church community welcomes everyone with open arms. We believe in the power of faith, love, and community service. Join us every Sunday for worship and fellowship.',
    'Community',
    true,
    'Church Admin',
    'Administrator',
    '2 min read',
    ARRAY['Community', 'Spiritual'],
    'en'
),
(
    'Upcoming Youth Ministry Events',
    'Discover exciting opportunities for young people to grow in faith and build lasting friendships.',
    'Our youth ministry is planning several exciting events this month. From Bible study groups to community service projects, there are many ways for young people to get involved.',
    'Youth',
    true,
    'Youth Minister',
    'Youth Coordinator',
    '3 min read',
    ARRAY['Youth', 'Education'],
    'en'
);

-- Insert sample events
INSERT INTO events (title, description, date, time, location, category, featured, organizer, contact, max_attendees) VALUES 
(
    'Sunday Worship Service',
    'Join us for our weekly worship service featuring inspiring music, prayer, and a meaningful sermon.',
    '2024-01-15',
    '10:00:00',
    'Main Sanctuary',
    'Worship',
    true,
    'Church Staff',
    'info@ethiopianchurch.com',
    200
),
(
    'Community Bible Study',
    'An interactive Bible study session open to all members of our community.',
    '2024-01-20',
    '19:00:00',
    'Fellowship Hall',
    'Education',
    false,
    'Pastor John',
    'pastor@ethiopianchurch.com',
    50
);

-- Insert sample gallery folders
INSERT INTO gallery_folders (name, description, display_order) VALUES 
('Church Events', 'Photos from various church events and celebrations', 1),
('Community Service', 'Images from our community service activities', 2),
('Worship Services', 'Photos from our worship services', 3);

-- Insert sample gallery items
INSERT INTO gallery (title, description, image_url, category, folder_id, display_order) VALUES 
(
    'Sunday Service',
    'Our congregation during Sunday worship service',
    'https://example.com/images/sunday-service.jpg',
    'Worship',
    1,
    1
),
(
    'Community Outreach',
    'Members participating in community service activities',
    'https://example.com/images/community-outreach.jpg',
    'Community',
    2,
    1
);

-- Insert sample announcements
INSERT INTO announcements (title, content, priority) VALUES 
(
    'Welcome to Our New Website',
    'We are excited to launch our new church website! Stay connected with our community and access resources, events, and updates.',
    'normal'
),
(
    'Important: Church Maintenance',
    'Please note that the main sanctuary will be closed for maintenance on Saturday, January 20th. Sunday services will proceed as usual.',
    'high'
);

-- Insert sample archive items
INSERT INTO archive (title, description, year, type, category, tags) VALUES 
(
    'Church History Document',
    'Historical document about the founding of our church',
    2020,
    'document',
    'History',
    ARRAY['History', 'Church']
),
(
    'Community Photo Collection',
    'Collection of photos from community events',
    2021,
    'photo',
    'Community',
    ARRAY['Community', 'Events']
);

-- Insert sample church calendar
INSERT INTO church_calendars (year, title, file_path, file_name, file_size, mime_type, is_active) VALUES 
(
    2024,
    'Church Calendar 2024',
    'https://example.com/calendars/church-calendar-2024.pdf',
    'church-calendar-2024.pdf',
    1024000,
    'application/pdf',
    true
);

-- =====================================================
-- Step 6: Grant Permissions (if needed)
-- =====================================================

-- Grant necessary permissions to the database user
-- (Adjust based on your specific database user)

-- =====================================================
-- Step 7: Verification
-- =====================================================

-- Verify tables were created successfully
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Verify admin user was created
SELECT email, first_name, last_name, role, is_admin FROM profiles WHERE email = 'admin@ethiopianchurch.com';

-- =====================================================
-- Setup Complete!
-- =====================================================

-- Your Ethiopian Church database is now ready!
-- Admin credentials: admin@ethiopianchurch.com / admin123 