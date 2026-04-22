import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Layers,
  Image as ImageIcon,
  MessageSquare,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  X,
  Upload,
  Menu,
} from 'lucide-react';
import type { Product, Material, GalleryImage, Message, AdminStats } from '@/types';

interface AdminDashboardProps {
  onLogout: () => void;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const token = localStorage.getItem('adminToken');

  const fetchData = async () => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [statsRes, productsRes, materialsRes, galleryRes, messagesRes] =
        await Promise.all([
          fetch(`${API_URL}/stats`, { headers }),
          fetch(`${API_URL}/products`, { headers }),
          fetch(`${API_URL}/materials`, { headers }),
          fetch(`${API_URL}/gallery`, { headers }),
          fetch(`${API_URL}/messages`, { headers }),
        ]);

      setStats(await statsRes.json());
      setProducts(await productsRes.json());
      setMaterials(await materialsRes.json());
      setGallery(await galleryRes.json());
      setMessages(await messagesRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (type: string, id: string) => {
    try {
      const response = await fetch(`${API_URL}/${type}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        fetchData();
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const handleMarkMessageRead = async (id: string) => {
    try {
      await fetch(`${API_URL}/messages/${id}/read`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchData();
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'materials', label: 'Materials', icon: Layers },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6">
        <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl glass">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-cream/60 text-sm">Total Products</p>
              <p className="text-3xl font-serif font-bold text-gold-gradient mt-1">
                {stats?.products || 0}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl glass">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-cream/60 text-sm">Materials</p>
              <p className="text-3xl font-serif font-bold text-gold-gradient mt-1">
                {stats?.materials || 0}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <Layers className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl glass">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-cream/60 text-sm">Gallery Images</p>
              <p className="text-3xl font-serif font-bold text-gold-gradient mt-1">
                {stats?.gallery || 0}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl glass">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-cream/60 text-sm">Messages</p>
              <p className="text-3xl font-serif font-bold text-gold-gradient mt-1">
                {stats?.unreadMessages || 0}
                <span className="text-sm text-cream/40 font-normal ml-1">
                  / {stats?.messages || 0}
                </span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl glass">
        <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream mb-4">
          Recent Messages
        </h3>
        {messages.slice(0, 5).length === 0 ? (
          <p className="text-cream/60">No messages yet</p>
        ) : (
          <div className="space-y-4">
            {messages.slice(0, 5).map((message) => (
              <div
                key={message.id}
                className={`p-3 sm:p-4 rounded-xl ${
                  message.read ? 'bg-white/5' : 'bg-gold/10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-cream">{message.name}</p>
                    <p className="text-sm text-cream/60">{message.email}</p>
                    <p className="text-sm text-cream/40 mt-1 line-clamp-2">
                      {message.message}
                    </p>
                  </div>
                  <span className="text-xs text-cream/40">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="font-serif text-2xl font-semibold text-cream">
          Products
        </h2>
        <button
          onClick={() => {
            setModalType('product');
            setSelectedItem(null);
            setModalOpen(true);
          }}
          className="px-4 py-2 bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-medium rounded-xl flex items-center gap-2 hover:shadow-gold transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl glass overflow-hidden">
            <div className="aspect-[3/4] relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => {
                    setModalType('product');
                    setSelectedItem(product);
                    setModalOpen(true);
                  }}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-cream hover:text-gold transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteConfirm(product.id)}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-cream hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <span className="text-xs text-gold">{product.category}</span>
              <h3 className="font-medium text-cream mt-1">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMaterials = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="font-serif text-2xl font-semibold text-cream">
          Materials
        </h2>
        <button
          onClick={() => {
            setModalType('material');
            setSelectedItem(null);
            setModalOpen(true);
          }}
          className="px-4 py-2 bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-medium rounded-xl flex items-center gap-2 hover:shadow-gold transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Material
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6">
        {materials.map((material) => (
          <div key={material.id} className="rounded-2xl glass overflow-hidden">
            <div className="aspect-[4/3] relative">
              <img
                src={material.image}
                alt={material.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => {
                    setModalType('material');
                    setSelectedItem(material);
                    setModalOpen(true);
                  }}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-cream hover:text-gold transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteConfirm(material.id)}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-cream hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <span className="text-xs text-gold">{material.category}</span>
              <h3 className="font-medium text-cream mt-1">{material.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="font-serif text-2xl font-semibold text-cream">
          Gallery
        </h2>
        <button
          onClick={() => {
            setModalType('gallery');
            setSelectedItem(null);
            setModalOpen(true);
          }}
          className="px-4 py-2 bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-medium rounded-xl flex items-center gap-2 hover:shadow-gold transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Image
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:p-4">
        {gallery.map((item) => (
          <div key={item.id} className="relative group rounded-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.caption}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => setDeleteConfirm(item.id)}
                className="w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center text-white hover:bg-red-500 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl font-semibold text-cream">
        Messages
      </h2>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl ${
              message.read ? 'glass' : 'bg-gold/10 border border-gold/20'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 sm:p-4 mb-2">
                  <p className="font-medium text-cream text-lg">{message.name}</p>
                  {!message.read && (
                    <span className="px-2 py-0.5 rounded-full bg-gold text-stone-950 text-xs font-medium">
                      New
                    </span>
                  )}
                </div>
                <p className="text-sm text-cream/60">{message.email}</p>
                {message.phone && (
                  <p className="text-sm text-cream/60">{message.phone}</p>
                )}
                <p className="text-cream/80 mt-4">{message.message}</p>
                <p className="text-xs text-cream/40 mt-4">
                  {new Date(message.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                {!message.read && (
                  <button
                    onClick={() => handleMarkMessageRead(message.id)}
                    className="px-3 py-1 rounded-lg bg-gold/20 text-gold text-sm hover:bg-gold/30 transition-colors"
                  >
                    Mark Read
                  </button>
                )}
                <button
                  onClick={() => setDeleteConfirm(message.id)}
                  className="px-3 py-1 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-950 flex">
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-full sm:w-72 lg:w-64 bg-stone-900/95 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-serif font-bold text-gold-gradient">
                BLAGOFU.K
              </span>
              <p className="text-cream/40 text-sm mt-1">Admin Panel</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-cream"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="px-4 pb-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-gold/20 text-gold'
                  : 'text-cream/60 hover:bg-white/5 hover:text-cream'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-cream/60 hover:bg-red-500/20 hover:text-red-400 transition-all mt-8"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-stone-950/95 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-cream"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="font-serif text-lg sm:text-lg sm:text-xl font-semibold text-cream capitalize">
              {activeTab}
            </h1>
          </div>
        </header>

        {/* Content */}
        <main className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'products' && renderProducts()}
              {activeTab === 'materials' && renderMaterials()}
              {activeTab === 'gallery' && renderGallery()}
              {activeTab === 'messages' && renderMessages()}
            </>
          )}
        </main>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4">
          <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6 rounded-2xl glass max-w-md w-full">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream mb-4">
              Confirm Delete
            </h3>
            <p className="text-cream/60 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex gap-3 sm:p-4">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-3 rounded-xl border border-white/10 text-cream hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  handleDelete(
                    activeTab === 'messages' ? 'messages' : activeTab,
                    deleteConfirm
                  )
                }
                className="flex-1 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {modalOpen && (
        <ItemModal
          type={modalType}
          item={selectedItem}
          onClose={() => setModalOpen(false)}
          onSuccess={fetchData}
        />
      )}
    </div>
  );
};

// Item Modal Component
interface ItemModalProps {
  type: string;
  item: any;
  onClose: () => void;
  onSuccess: () => void;
}

const ItemModal = ({ type, item, onClose, onSuccess }: ItemModalProps) => {
  const [formData, setFormData] = useState({
    title: item?.title || '',
    category: item?.category || 'Ankara',
    description: item?.description || '',
    caption: item?.caption || '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState(item?.image || '');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('adminToken');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      if (image) data.append('image', image);
      Object.keys(formData).forEach((key) => {
        if (formData[key as keyof typeof formData]) {
          data.append(key, formData[key as keyof typeof formData]);
        }
      });

      const endpoint = type === 'gallery' ? type : `${type}s`;
      const url = item
        ? `${API_URL}/${endpoint}/${item.id}`
        : `${API_URL}/${endpoint}`;
      const method = item ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (response.ok) {
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setLoading(false);
    }
  };

  const isGallery = type === 'gallery';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[90vh] overflow-auto rounded-2xl glass">
        <div className="p-3 sm:p-4 sm:p-3 sm:p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream">
              {item ? 'Edit' : 'Add'} {type === 'gallery' ? 'Image' : type}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/5 text-cream"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-cream/80 mb-2">
                Image
              </label>
              <div className="relative">
                {preview ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setPreview('');
                      }}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-video rounded-xl border-2 border-dashed border-white/20 cursor-pointer hover:border-gold/50 transition-colors">
                    <Upload className="w-10 h-10 text-cream/40 mb-2" />
                    <span className="text-cream/60 text-sm">
                      Click to upload image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Title */}
            {!isGallery && (
              <div>
                <label className="block text-sm font-medium text-cream/80 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50"
                  placeholder="Enter title"
                />
              </div>
            )}

            {/* Caption (for gallery) */}
            {isGallery && (
              <div>
                <label className="block text-sm font-medium text-cream/80 mb-2">
                  Caption
                </label>
                <input
                  type="text"
                  value={formData.caption}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, caption: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50"
                  placeholder="Enter caption (optional)"
                />
              </div>
            )}

            {/* Category */}
            {!isGallery && (
              <div>
                <label className="block text-sm font-medium text-cream/80 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream focus:outline-none focus:border-gold/50"
                >
                  <option value="Ankara">Ankara</option>
                  <option value="Lace">Lace</option>
                  <option value="Asoebi">Asoebi</option>
                </select>
              </div>
            )}

            {/* Description */}
            {!isGallery && (
              <div>
                <label className="block text-sm font-medium text-cream/80 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 resize-none"
                  placeholder="Enter description"
                />
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 sm:p-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl border border-white/10 text-cream hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || (!item && !image)}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-dark text-stone-950 font-medium hover:shadow-gold transition-all disabled:opacity-50"
              >
                {loading ? 'Saving...' : item ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
