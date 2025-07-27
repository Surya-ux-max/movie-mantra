import { useState } from "react";
import { Bell, X, Play, Clock, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: number;
  type: "new_release" | "recommendation" | "reminder" | "update";
  title: string;
  message: string;
  time: string;
  image?: string;
  isRead: boolean;
}

const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "new_release",
      title: "New Release Available",
      message: "Dragon's Realm is now streaming. Don't miss this epic fantasy adventure!",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      type: "recommendation",
      title: "Recommended for You",
      message: "Based on your viewing history, you might like 'Speed Force'",
      time: "5 hours ago",
      isRead: false
    },
    {
      id: 3,
      type: "reminder",
      title: "Continue Watching",
      message: "You left off at 45:30 in 'Summer Love'",
      time: "1 day ago",
      isRead: true
    },
    {
      id: 4,
      type: "update",
      title: "Profile Update",
      message: "Your viewing preferences have been updated successfully",
      time: "2 days ago",
      isRead: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "new_release": return <Star className="h-4 w-4 text-yellow-500" />;
      case "recommendation": return <Play className="h-4 w-4 text-green-500" />;
      case "reminder": return <Clock className="h-4 w-4 text-blue-500" />;
      default: return <Bell className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
              {unreadCount > 0 && (
                <Badge variant="destructive" className="text-xs">
                  {unreadCount}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  Mark all read
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-2">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  notification.isRead 
                    ? "bg-muted/50 border-border" 
                    : "bg-accent border-accent-foreground/20 hover:bg-accent/80"
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-medium ${
                        notification.isRead ? "text-muted-foreground" : "text-foreground"
                      }`}>
                        {notification.title}
                      </h4>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className={`text-sm mt-1 ${
                      notification.isRead ? "text-muted-foreground" : "text-muted-foreground"
                    }`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No notifications yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                We'll notify you about new releases and recommendations
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationPanel;