PGDMP             
            z            ots_test    14.5    14.5     c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    177911    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    177978 
   facilities    TABLE     �  CREATE TABLE public.facilities (
    id integer NOT NULL,
    country character varying(255) DEFAULT 'Россия'::character varying NOT NULL,
    vendor character varying(255) DEFAULT 'Не определен'::character varying NOT NULL,
    title character varying(255) NOT NULL,
    "equipmentType" character varying(255) NOT NULL,
    "measurementArea" character varying(255),
    "meansurementType" character varying(255),
    "meansureGroup" character varying(255),
    modifications character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "technicalCardId" integer
);
    DROP TABLE public.facilities;
       public         heap    postgres    false            �            1259    177985    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    225            g           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    226            �           2604    179247    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            _          0    177978 
   facilities 
   TABLE DATA           �   COPY public.facilities (id, country, vendor, title, "equipmentType", "measurementArea", "meansurementType", "meansureGroup", modifications, "createdAt", "updatedAt", "technicalCardId") FROM stdin;
    public          postgres    false    225   0       h           0    0    facilities_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.facilities_id_seq', 194, true);
          public          postgres    false    226            �           2606    178157    facilities facilities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pkey;
       public            postgres    false    225            _      x��]�oGr�,���D!�Q��w�єr�$2��9���83���
p�� Q��w�cQ�	4%��sHXQ�M�.���tU����,{�#�e_S�;U�]U�zt/O�d���py�����f;N6Ȏ�7��l�����L��mo� ��������d/��^:t� {_ �O��H{g������o����3>�}��.�:<��A�E���#(W�>��|n_7�-�� ���:��/�}�cE�3�����#��%Kf�Եdi�bX:ȉ��� �n愧�����3�'I�	8�-9�'�f�����h���0LwĄe���C�?��4��{��+�G���.���@vl�o�ɶ��?�Z??�뇷�)��{x���<r��s�XX�w�!��6\�(�0��6I�SMlg��?%ր���W�Vևk(�x�m���v��}�;;�X���c����Ћ�n>��Y��*0��m��e�~�(�9w��9�n�Ѧ�Q�qu�ߦ�[��px�:�W�+��[��d��y�=ʁq��=�Jx���i��B�<�����Ս�M�8�4��k@HZb��N���`j����q}>�OZbO�l�T�~�F��[��U3d=�=�>�F.ˉ}F���<�L�9y����7��l��Ś�>=?��{a4.�0�,�,Y[G6@;p���١ס��7��n&�	^�dQk��ޢ��;�"#��+���̕�cm|�㡗��jT���;���29ԇ�٣�6��X�{0K4Swq��6�]�����{�ȟok�VrK�V�/�s����.ߤ7��b�%c��|��RB����A�y�9~����dp��Dܡ�z��٢�r��Ȱ���~�>��2h�\��r8��<��ǋ��� �M����79�l�Ҡ���.x��m��#�z�V�p��|�<jE[�X���"w�$
x��#��%^"ޮ���+r�.�'�Y@2+���@$_iq[��*�����R�׫�,�IH�<�y����� �l+!�w���]y���ɨ}to[�{@��E��8ߵ�0Rt��)���c�cm��r�#X$�{섌�y�`8�]I���0�[�X�X����|�8��y�^�SSJ$d�~��ɦ�k�Dli`f�$!��`�6��qX�������I[���a�f&f�%�[e���}߲H���=�"�:	�7�e6�!M��
|/�v����\�`w�{+c�V�nl;\kd��E����!�^0o�u��nݽe�s�2�؆v���yRQ�
�tr1�9���E�m(����چr���c����t����Bd����$eg���e�{a�qbP�:	y�UV	��A��|��� �a}�&�!��̴&�Lr����{Q�u��0�u:l�|Sh5��)넦sKw9EZ�l@�e�<L�(|SXYO�@
�u*�-ڐU����2�Q�o��@&�0>�MO�h�5����P�;��,�G��OkY�-�?V)�V��m��x���Dhm�*�Mq�=.�-�w����v��a6�9��/\
+��i���V�S��)�̛��������/�K�qe5ת�;���
B��9�V���V4�-�#�t$Pg�U�k�E�O~�*���X�A�*�E�!���	�{,4[�8*�`�{��(�ᗭznwd�a����$d�VO���ċS�_'a8Q��]��v�t��,�=ν0�,�I8��Q��c0�X��"s��c8F�S �z����-bt�ք1a�'��01wU$d��ٞ�������NBsc�;b��֕�U���{�{ܔf�H��F�kRIS���7�m������0Stu�ck��^�Iy0���c��s��߮��k�zd_����A/3x�ךNB�i�H�z�'9Y\C��^um����GĂ����0.���"��E�m�w���
ۂ������J�X��rݡz�6�����>�;���#���R����2��]&R��Z��M*U[�bq���N
8R�2(D�k{��3��:����͛%U̜/K��\D����r�0
�E~�y��V���-�O���k[��Q C*�)�v\�O[2خ�Us�T�Q_�+9�uԛT��E��v��j��t��jeȃ�W���k�\j�c�'��h���Z� e��-� ��:}�l�L'<gç\�֭�:>"ߠ�1D�1ǅ�0)��rfa~v���YC��9e���
��k��� �
��W�w|��
��fWc�DB������9@����$�[ڿ�?�A�����h.��E�q@c�\����XbI/��W�@r��4n���r0������_��I�V���\��#*����0���㨒�3u]��Vh���&�Î52�!�����f�.K��q���Y�@"�U���!]E'J�3�j�M��ϊhw�G���(���
�s�/���jKy�eOA��E�r�1�)� �^�&�N"��p�]�B>ޅ�?*��𦨹�Y�.ख़���xe33.�`��q�5V'�檑AMV`� �wT�E���,����n߄wX��p*d�o]��s��u��!gS<������W���V}M>w�y,u�$M��M�e�'�����@d� Q)�z>Kt~%͇^�|�m ���ٟ;�a �|/�t�ZB�R� �����Т�hU�
��ߙ`5�¿�n�%\�p�Q�i ���-��MJPj�vQ姾
�:�כM��%]G�=t���e�`����>J%�:P�� >���>*��D����+cꍢф�Oq��婯��_C�2�~L��߁�� �t��������Su�$�� ��X`��ɍ��8K�>���ȓK�pפ�@?�ԃz�� �@����8�IWu�*����V�D檉k��Bޒ^�U�V���5�_�{��4D�E¨���˨���mԓ2�N�oo�ߋ�וK/��Ů|х\t-�j��~��}�tݙ�vc������%����-��4�xi��'Gv	oU;�����b�磶�x�$�����s�_�̹��̼��J�9U'B����l��]�o�X011q���n4�.�����^ļ4�ϯ����>�٤�[̖��-�]�Y��u..:0��=�b���%���X]�jQ�u����������#��za�%ij�N"Ϣ|��{���<���s.� .�������b@]~�U�uW�J�J����f��kK���ȹ��o||�g���G�_����xg�����(�la���H8�N��$Tg�r����+	c�?���_����k�[��93��Ѱs���Qj�$�E5bSسAk���w��n��`�e��q�~,��A��Q!��U)xr"�W8 !�sQ�9V���e>2��:�6t����
[����đ�e�����+غZ�L�kY��|*B)$M�7F�v�Ľ�t0��UA=0A\�%:NRH$W�9e��p:ǄROe&�qkE�D�c0�����'VHğ�5��QE_n��Y�1�#8���L�Rz:w��Y�\��;�[Y\?,��.�g�yB�.��#�$L��vH����Q��?�'6��	_w�
HK��~#q�^�7�3�d�)�b/�yi1����@S���������&�!���|�
Ի�N]4���5�+��'����<�'�>�g���5�E��+?��d�:��}�ĝL��v<�+�)m�>�Q�?����E>�ϳߜM�������e��܈"��F�Ȏ�(&�57F����uS�3�R�x4�v�RY��]�(����)� O���i�5Ȟ�� ���h�i�&2�3q{�Wec���WG�R^I�]�����~����̋f����4^M��Zn'���U��
�$LO$៳������w�Y�_��r���{؍�z]n�O"���?yy��{OWg�����9�\���[��6���Mݽ?
B�[TG4ȧ�h�"G� �����,�F�H�x�ub�|!� B� O]ƹ��ܧ�_[Z
���
��>f!
��   S<�� k�C�a�e0�[�e��7�C�%��E?�#8^�1��(P5�Gj2�+�S1�쪐(�Z�;�apOT��H���$����j�Xw̾���u�����a��i��I�FR����ɥ7�1�t�jF��F�fk.(Ϛˢ&��f��G Q:�D�:ʸ�8c�dƓ&���g��scBy�:����Y �?��%r<����	�H�p�Qs.�5�Z�5�O�5��^#]���^��<O�����צ�o]÷�r�s���T�rN"=R��7��lS����]��[�\'[��@��)���SB��)����������>�X)���>�����1��j$^��7�ܖgh�T>)\�8J�R>��#�]i�T�z�66�]�2Nv4�b�Pim�
�t�oKǄ�ў�Zg��S�TՏ4��B:�"�%��6ϵ�ՒgS�DU�ʠN���1[��h�s��nҧn;j�c����-�<�#7&p3'<?�<%�E?iXt�D\��BFö"�D2��ƚMŕ�)i�]Y�}q��:��6Kh���M1����D�
KV��eR(iΎ�[.6�oQ|��|б�y=�#W�B^���hs��ؠ�������o02�ݳ���R̺�a�V���V]ܕr����Ew�r\��QM�s��S4(0�4�Q�NpĪ6�E�hh[�ie�L����S�}��q��L"VԪm;(�\K����,%�#�������"�)�G�-�AJz�yi5���Ӷ]h�tN�ڡcm�G�������^X����\C~����\�>!�[ Z�P
4m�K�jC����E��^z�z$������˜�7��������s�u��Æ�gv�(-�+�S;fW�c�#����]!�L��c�n�ǹf��u�@Ig�ʂ���wf>;ߙ�\���s��]��uB��m�JP'�Tc^!Q唍��kdhf`��y�����W��]���]�� 4a��k�D욷XP=�(��Zůa��.��	�! ��F���sB�a��^p�ff�.̞;_���Ij�K$�0z�����9,��L]����sNZ����^����H$�a��1�yX#�k���tG���˸�gv����_��88�W�����x���h��.khA ~Bс0weV@Ћ�&�DB�Ʉ�3��GKN���Z8o�h�@�j0I�5o����^�k<Μ<�w�lf��	�	b�{aiW�i��Hs��Y�&�LVJ�ø_�+�$�|���QI$�I����.X)!c9���}�؛��fb�Њ��_
�b�V��@W�XJ�e��񠮍�T��������y�r7[�WJ�F�� �b���������L�OH������A��;�B��xj���D��篝�{�,�;�R�+*X���⏉B���I%<:��-,E�Bd�zAsr5$
�`V�j�h��1h��Q?/L�ԖV i��&e�^�
���H����<�I�6��gU�朾_B�t�2�؟)z�O�����L�=/�q"��0�cu��|�ϲ�c���g*�^�\�ɵR}������P�ٚmCV�m߂So�8r��i%�r�� m��'���X�jvkjuO��ZGu�A�BI�G��'P�~�8,1P���I'��o����@i%�	��OCWD!He�Z�@x^�-�0����"�h�1T��a���v��4��d� g�
��;��ғ&<b5��;��C`�/KR��E5[�T���E�u�P�t���������ֹ��i��n@f�ϳ?E��Tir#��v[�MeVEwN�y-���kF���=�- Z�=���W�����	\�Ξ=�WJ�zd     