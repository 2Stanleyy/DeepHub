import React, { useState, useEffect } from 'react';

const Hub = () => {
  // Profile Data
  const [profile] = useState({
    username: '2Stanleyy',
    fullName: 'Stanley',
    friends: 327,
    status: 'Just created The Hub!',
    music: 'Say Please - Nettspend',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjRGRDk1QzA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjRGRDk1RDA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyNEZEOjU5QzA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MjRGRDk1QTA3NjgxMUUzQkZGNDhENEJFQjM2OTcyRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtXKhNEAAAKoSURBVHja7Jq9axNxHMdTqy1FQaSDgwgKguDk4FwQJ3FwEESQ/gOCk4ODk4Pg4ODgIA4OgggO/gEOglAHF0FQqAgiKGJtsa0WbWJ/Hz7f8krvcnfJXe6SS94wXHLJ3ff7+X5/v8u3USwWfV2jUc8B9RzwPwZ8KxQKdQ34Xa1Wq5rQ0IDf+Xy+rgHfM5lMXQN+ZrPZugb8yOVydQ34ls/n6xrwNZ/P1zXgSy6Xq2vA51wuV9eAj7lcjgHfazWg0Wj8GjCgVgM+ZbNZBvyq1YCPmUyGAT9qNeB9Op1mwPdaDXibTqcZ8K1WA14mk0kGfK3VgJfJZJIBX2o14HkikWDA51oNeBqPxxnwsVYDnsRiMQZ8rNWAR9FolAEfajXgQTQaZcD7Wg24F4lEGPCuVgNuRyIRBryt1YAb4XCYAW9qNeBaKBRiwOtaDbgcCoUY8LJWAy4Gg0EGvKjVgHOBQIABz2o14Izf72fA01oNOO3z+RjwpFYDTo6PjzPgca0GHB8bG2PAw1oNODIyMsKAB7UacHB4eJgB92o14MDQ0BAD7tRqwN7BwUEG3K7VgF0DAwMMuFWrAdsHBgYYcLNWA7b29/cz4EatBmzu6+tjwPVaDdjY29vLgGu1GrChp6eHAVdrNWBdd3c3A67UasDqrq4uBlyu1YAVnZ2dDLhUqwHLOjo6GHChVgOWtLe3M+B8rQYsamtrY8C5Wg1Y0NraysCztRrQ0tLSwsAztRrQ3NzczMC6Bvz3AQ8fPvQ1GvUcUM8B9RzwLwAAAP//0gAqy3SCp5AAAAAASUVORK5CYII=',
    bio: 'Co-founder of The Hub | Coding enthusiast | Retro web lover',
    location: 'San Francisco, CA',
    age: 32,
    interests: ['Bitches', 'Bucks', 'Bladee'],
    profileViews: 1337
  });

  // Comments System
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Video System
  const [videos, setVideos] = useState(() => {
    const saved = localStorage.getItem('hubVideos');
    return saved ? JSON.parse(saved) : [{
      id: 1,
      url: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'Welcome Video',
      date: new Date().toLocaleDateString()
    }];
  });
  const [selectedVideo, setSelectedVideo] = useState(1);

  useEffect(() => {
    localStorage.setItem('hubVideos', JSON.stringify(videos));
  }, [videos]);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newVideo = {
          id: Date.now(),
          url: event.target.result,
          title: `My Video ${videos.length}`,
          date: new Date().toLocaleDateString()
        };
        setVideos([newVideo, ...videos]);
        setSelectedVideo(newVideo.id);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
    if (selectedVideo === id) setSelectedVideo(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now(),
        text: newComment,
        author: 'Friend',
        timestamp: new Date().toLocaleString()
      }]);
      setNewComment('');
    }
  };

  // Styles
  const styles = {
    container: {
      backgroundColor: '#F0F0F0',
      minHeight: '100vh',
      fontFamily: '"Trebuchet MS", Arial, sans-serif',
      fontSize: '12px',
      color: '#333',
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 70px)'
    },
    navBar: {
      background: 'linear-gradient(to bottom, #3B5998, #2B4170)',
      color: 'white',
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #1A2947'
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold',
      textShadow: '2px 2px 0 #1A2947',
      fontFamily: 'Impact, Charcoal, sans-serif'
    },
    navLinks: {
      display: 'flex',
      gap: '15px'
    },
    navItem: {
      cursor: 'pointer',
      padding: '4px 8px',
      background: 'linear-gradient(to bottom, #4F6AA3, #354F84)',
      borderRadius: '3px',
      textTransform: 'uppercase'
    },
    content: {
      display: 'flex',
      maxWidth: '980px',
      margin: '0 auto',
      padding: '20px',
      gap: '20px'
    },
    leftColumn: {
      width: '280px'
    },
    profileBox: {
      background: '#FFF',
      border: '4px ridge #C0C0C0',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '20px',
      boxShadow: '3px 3px 5px rgba(0,0,0,0.2)'
    },
    profileHeader: {
      display: 'flex',
      gap: '15px',
      marginBottom: '15px'
    },
    avatarContainer: {
      position: 'relative'
    },
    profileImage: {
      width: '150px',
      height: '150px',
      border: '3px outset #C0C0C0',
      borderRadius: '8px'
    },
    onlineStatus: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      width: '15px',
      height: '15px',
      backgroundColor: '#00FF00',
      borderRadius: '50%',
      border: '2px solid white',
      boxShadow: '0 0 5px rgba(0,255,0,0.5)'
    },
    profileInfo: {
      flex: 1
    },
    username: {
      color: '#3B5998',
      fontSize: '24px',
      margin: '0 0 5px 0',
      textShadow: '1px 1px 1px rgba(0,0,0,0.1)'
    },
    fullName: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '10px'
    },
    profileStats: {
      display: 'flex',
      gap: '20px',
      marginBottom: '15px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      display: 'block',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#3B5998'
    },
    statLabel: {
      fontSize: '11px',
      color: '#666'
    },
    profileDetails: {
      borderTop: '2px solid #EEE',
      paddingTop: '15px'
    },
    detailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
      fontSize: '13px'
    },
    detailLabel: {
      fontWeight: 'bold',
      color: '#3B5998',
      width: '80px'
    },
    detailValue: {
      color: '#333'
    },
    bio: {
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#F8F8F8',
      borderRadius: '5px',
      lineHeight: '1.4'
    },
    musicPlayer: {
      backgroundColor: '#000',
      color: '#0F0',
      padding: '8px',
      marginTop: '15px',
      border: '2px groove #404040'
    },
    rightColumn: {
      flex: 1
    },
    videoSection: {
      background: '#FFF',
      border: '3px double #C0C0C0',
      padding: '15px',
      marginBottom: '20px'
    },
    uploadLabel: {
      display: 'block',
      background: 'linear-gradient(to bottom, #4CAF50, #45A049)',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      textAlign: 'center',
      marginBottom: '15px',
      cursor: 'pointer',
      border: '1px solid #3D8B3D'
    },
    videoPlayer: {
      width: '100%',
      height: '300px',
      backgroundColor: '#000',
      marginBottom: '15px'
    },
    videoList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px'
    },
    videoThumbnail: {
      position: 'relative',
      cursor: 'pointer',
      border: '3px solid #C0C0C0',
      '&:hover': {
        opacity: 0.8
      }
    },
    videoPreview: {
      width: '100%',
      height: '100px',
      overflow: 'hidden'
    },
    videoControls: {
      padding: '5px',
      position: 'relative'
    },
    deleteButton: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      background: '#FF4444',
      border: '2px solid #CC0000',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    videoTitle: {
      fontSize: '11px',
      color: '#3B5998',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    videoDate: {
      fontSize: '9px',
      color: '#666'
    },
    commentsBox: {
      background: '#FFF',
      border: '3px double #C0C0C0',
      padding: '15px'
    },
    commentForm: {
      marginBottom: '15px'
    },
    commentInput: {
      width: '100%',
      height: '80px',
      padding: '8px',
      border: '1px solid #DDD',
      borderRadius: '4px',
      marginBottom: '10px'
    },
    formControls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    commentButton: {
      background: 'linear-gradient(to bottom, #4CAF50, #45A049)',
      color: 'white',
      padding: '6px 12px',
      border: '1px solid #3D8B3D',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    anonymousCheck: {
      fontSize: '11px',
      color: '#666'
    },
    commentsList: {
      borderTop: '1px solid #DDD',
      paddingTop: '15px'
    },
    comment: {
      background: '#FFFFEE',
      border: '1px solid #DDDDCC',
      borderRadius: '4px',
      padding: '10px',
      marginBottom: '10px'
    },
    commentHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5px'
    },
    commentAuthor: {
      fontWeight: 'bold',
      color: '#3B5998'
    },
    commentTime: {
      color: '#666',
      fontSize: '10px'
    },
    commentText: {
      color: '#333'
    },
    footer: {
      borderTop: '2px solid #CCC',
      padding: '15px',
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '11px'
    },
    footerLinks: {
      display: 'flex',
      gap: '10px'
    },
    footerLink: {
      color: '#3B5998',
      textDecoration: 'none'
    },
    counter: {
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navBar}>
        <div style={styles.logo}>THE HUB</div>
        <div style={styles.navLinks}>
          <span style={styles.navItem}>Home</span>
          <span style={styles.navItem}>Browse</span>
          <span style={styles.navItem}>Search</span>
          <span style={styles.navItem}>Invite</span>
          <span style={styles.navItem}>Film</span>
        </div>
      </nav>

      <div style={styles.content}>
        <div style={styles.leftColumn}>
          <div style={styles.profileBox}>
            <div style={styles.profileHeader}>
              <div style={styles.avatarContainer}>
                <img src={profile.avatar} alt="Profile" style={styles.profileImage} />
                <div style={styles.onlineStatus} />
              </div>
              <div style={styles.profileInfo}>
                <h2 style={styles.username}>{profile.username}</h2>
                <div style={styles.fullName}>{profile.fullName}</div>
                <div style={styles.profileStats}>
                  <div style={styles.statItem}>
                    <span style={styles.statNumber}>{profile.friends}</span>
                    <span style={styles.statLabel}>Friends</span>
                  </div>
                  <div style={styles.statItem}>
                    <span style={styles.statNumber}>{profile.profileViews}</span>
                    <span style={styles.statLabel}>Views</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.profileDetails}>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Age:</span>
                <span style={styles.detailValue}>{profile.age}</span>
              </div>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Location:</span>
                <span style={styles.detailValue}>{profile.location}</span>
              </div>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Interests:</span>
                <span style={styles.detailValue}>{profile.interests.join(', ')}</span>
              </div>
              <div style={styles.bio}>{profile.bio}</div>
            </div>

            <div style={styles.musicPlayer}>
              <marquee behavior="scroll" direction="left">
                Now Playing: {profile.music}
              </marquee>
            </div>
          </div>

          <div style={styles.profileBox}>
            <h3 style={styles.sectionHeader}>Top Friends</h3>
            {[...Array(8)].map((_, i) => (
              <div key={i} style={styles.friendItem}>
                <div style={styles.friendAvatar} />
                <div style={styles.friendInfo}>
                  <div style={styles.friendName}>Friend {i + 1}</div>
                  <div style={styles.friendStatus}>"Hey what's up?"</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.videoSection}>
            <label style={styles.uploadLabel}>
              Upload New Video
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                style={{ display: 'none' }}
              />
            </label>

            <div style={styles.videoPlayer}>
              {videos.find(v => v.id === selectedVideo) ? (
                <video
                  controls
                  style={{ width: '100%', height: '100%' }}
                  src={videos.find(v => v.id === selectedVideo).url}
                />
              ) : (
                <div style={{ color: '#3B5998', textAlign: 'center', padding: '20px' }}>
                  Select a video to play
                </div>
              )}
            </div>

            <div style={styles.videoList}>
              {videos.map(video => (
                <div
                  key={video.id}
                  style={{
                    ...styles.videoThumbnail,
                    border: video.id === selectedVideo ? '3px solid #3B5998' : '3px solid #C0C0C0'
                  }}
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div style={styles.videoPreview}>
                    <video
                      muted
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      src={video.url}
                    />
                  </div>
                  <div style={styles.videoControls}>
                    <button
                      style={styles.deleteButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteVideo(video.id);
                      }}
                    >
                      X
                    </button>
                    <div style={styles.videoTitle}>{video.title}</div>
                    <div style={styles.videoDate}>{video.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.commentsBox}>
            <h3 style={styles.sectionHeader}>Comments ({comments.length})</h3>
            <form onSubmit={handleSubmit} style={styles.commentForm}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={styles.commentInput}
                placeholder="Write a comment..."
              />
              <div style={styles.formControls}>
                <button type="submit" style={styles.commentButton}>Post Comment</button>
                <label style={styles.anonymousCheck}>
                  <input type="checkbox" /> Post Anonymously
                </label>
              </div>
            </form>
            <div style={styles.commentsList}>
              {comments.map(comment => (
                <div key={comment.id} style={styles.comment}>
                  <div style={styles.commentHeader}>
                    <span style={styles.commentAuthor}>{comment.author}</span>
                    <span style={styles.commentTime}>{comment.timestamp}</span>
                  </div>
                  <div style={styles.commentText}>{comment.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#about" style={styles.footerLink}>About</a>
          <a href="#faq" style={styles.footerLink}>FAQ</a>
          <a href="#terms" style={styles.footerLink}>Terms</a>
        </div>
        <div style={styles.counter}>
          <img src="data:image/gif;base64,R0lGODlhCQAJAIABAAAAAP///yH5BAEAAAEALAAAAAAJAAkAAAIKjI+py+0Po5y02gA7" alt="counter" />
          1337 visitors
        </div>
      </footer>
    </div>
  );
};

export default Hub;